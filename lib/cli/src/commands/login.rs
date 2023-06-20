use std::path::PathBuf;

use clap::Parser;
#[cfg(not(test))]
use dialoguer::Input;

use crate::{Registry, WasmerDir};

/// Subcommand for listing packages
#[derive(Debug, Clone, Parser)]
pub struct Login {
    /// Set Wasmer's home directory
    #[clap(long, env = "WASMER_DIR", default_value = crate::WASMER_DIR.as_os_str())]
    pub wasmer_dir: PathBuf,
    /// The registry to fetch packages from (inferred from the environment by
    /// default)
    #[clap(long, env = "WASMER_REGISTRY")]
    pub registry: Option<Registry>,
    /// The API token to use when communicating with the registry (inferred from
    /// the environment by default)
    pub token: Option<String>,
}

impl Login {
    fn get_token_or_ask_user(&self, wasmer_dir: &WasmerDir) -> Result<String, anyhow::Error> {
        if let Some(token) = &self.token {
            return Ok(token.clone());
        }

        let registry_host = wasmer_dir.registry_endpoint()?;
        let registry_tld = tldextract::TldExtractor::new(tldextract::TldOption::default())
            .extract(registry_host.as_str())
            .map_err(|e| {
                std::io::Error::new(
                    std::io::ErrorKind::Other,
                    format!("Invalid registry for login {}: {e}", registry_host),
                )
            })?;
        let login_prompt = match (
            registry_tld.domain.as_deref(),
            registry_tld.suffix.as_deref(),
        ) {
            (Some(d), Some(s)) => {
                format!("Please paste the login token from https://{d}.{s}/settings/access-tokens")
            }
            _ => "Please paste the login token".to_string(),
        };
        #[cfg(test)]
        {
            Ok(login_prompt)
        }
        #[cfg(not(test))]
        {
            let token = Input::new().with_prompt(&login_prompt).interact_text()?;
            Ok(token)
        }
    }

    fn wasmer_dir(&self) -> WasmerDir {
        WasmerDir::new(
            self.wasmer_dir.clone(),
            self.registry.clone(),
            self.token.clone(),
        )
    }

    /// execute [List]
    pub fn execute(&self) -> Result<(), anyhow::Error> {
        let wasmer_dir = self.wasmer_dir();
        let token = self.get_token_or_ask_user(&wasmer_dir)?;

        let registry = wasmer_dir.registry_endpoint()?;
        match wasmer_registry::login::login_and_save_token(
            wasmer_dir.dir(),
            registry.as_str(),
            &token,
        )? {
            Some(s) => println!("Login for Wasmer user {:?} saved", s),
            None => println!(
                "Error: no user found on registry {:?} with token {:?}. Token saved regardless.",
                registry, token
            ),
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use tempfile::TempDir;

    use super::*;

    #[test]
    fn interactive_login() {
        let temp = TempDir::new().unwrap();
        let login = Login {
            registry: Some("wasmer.wtf".into()),
            wasmer_dir: temp.path().to_path_buf(),
            token: None,
        };
        let wasmer_dir = login.wasmer_dir();

        assert_eq!(
            login.get_token_or_ask_user(&wasmer_dir).unwrap(),
            "Please paste the login token from https://wasmer.wtf/settings/access-tokens"
        );
    }

    #[test]
    fn login_with_token() {
        let temp = TempDir::new().unwrap();
        let login = Login {
            registry: Some("wasmer.wtf".into()),
            wasmer_dir: temp.path().to_path_buf(),
            token: Some("abc".to_string()),
        };
        let wasmer_dir = login.wasmer_dir();

        assert_eq!(login.get_token_or_ask_user(&wasmer_dir).unwrap(), "abc");
    }
}
