var sourcesIndex = JSON.parse('{\
"compiler_test_derive":["",[],["ignores.rs","lib.rs"]],\
"macro_wasmer_universal_test":["",[],["lib.rs"]],\
"test_generator":["",[],["lib.rs","processors.rs"]],\
"virtual_fs":["",[["mem_fs",[],["file.rs","file_opener.rs","filesystem.rs","mod.rs","stdio.rs"]]],["arc_box_file.rs","arc_file.rs","arc_fs.rs","buffer_file.rs","builder.rs","combine_file.rs","cow_file.rs","dual_write_file.rs","empty_fs.rs","filesystems.rs","host_fs.rs","lib.rs","limiter.rs","null_file.rs","ops.rs","overlay_fs.rs","passthru_fs.rs","pipe.rs","random_file.rs","special_file.rs","static_file.rs","static_fs.rs","tmp_fs.rs","trace_fs.rs","union_fs.rs","webc_fs.rs","webc_volume_fs.rs","zero_file.rs"]],\
"virtual_mio":["",[],["guard.rs","interest.rs","lib.rs","selector.rs","waker.rs"]],\
"virtual_net":["",[],["client.rs","host.rs","lib.rs","meta.rs","rx_tx.rs","server.rs"]],\
"wai_bindgen_wasmer":["",[],["error.rs","le.rs","lib.rs","region.rs","slab.rs","table.rs"]],\
"wasi_test_generator":["",[],["main.rs","set_up_toolchain.rs","util.rs","wasi_version.rs","wasitests.rs"]],\
"wasix_http_client":["",[],["lib.rs","wasix_http_client_v1.rs"]],\
"wasmer":["",[["externals",[],["function.rs","global.rs","memory.rs","memory_view.rs","mod.rs","table.rs"]],["sys",[["externals",[],["function.rs","global.rs","memory.rs","memory_view.rs","mod.rs","table.rs"]]],["engine.rs","errors.rs","extern_ref.rs","instance.rs","mem_access.rs","mod.rs","module.rs","tunables.rs","typed_function.rs"]]],["access.rs","engine.rs","errors.rs","exports.rs","extern_ref.rs","function_env.rs","imports.rs","instance.rs","into_bytes.rs","lib.rs","mem_access.rs","module.rs","native_type.rs","ptr.rs","store.rs","typed_function.rs","value.rs","vm.rs"]],\
"wasmer_c_api":["",[["wasm_c_api",[["externals",[],["function.rs","global.rs","memory.rs","mod.rs","table.rs"]],["types",[],["export.rs","extern_.rs","frame.rs","function.rs","global.rs","import.rs","memory.rs","mod.rs","mutability.rs","table.rs","value.rs"]],["unstable",[["middlewares",[],["metering.rs","mod.rs"]],["parser",[],["mod.rs","operator.rs"]]],["engine.rs","features.rs","mod.rs","module.rs","target_lexicon.rs","wasi.rs"]],["wasi",[],["mod.rs"]]],["engine.rs","function_env.rs","instance.rs","macros.rs","mod.rs","module.rs","store.rs","trap.rs","value.rs","version.rs","wat.rs"]]],["error.rs","lib.rs"]],\
"wasmer_c_api_test_runner":["",[],["lib.rs"]],\
"wasmer_cache":["",[],["cache.rs","filesystem.rs","hash.rs","lib.rs"]],\
"wasmer_capi_examples_runner":["",[],["lib.rs"]],\
"wasmer_cli":["",[["c_gen",[],["mod.rs","staticlib_header.rs"]],["commands",[["run",[],["mod.rs","wasi.rs"]]],["add.rs","binfmt.rs","cache.rs","compile.rs","config.rs","create_exe.rs","create_obj.rs","gen_c_header.rs","init.rs","inspect.rs","login.rs","mod.rs","publish.rs","self_update.rs","validate.rs","wast.rs","whoami.rs"]]],["cli.rs","common.rs","error.rs","lib.rs","logging.rs","package_source.rs","store.rs","suggestions.rs","utils.rs"]],\
"wasmer_compiler":["",[["artifact_builders",[],["artifact_builder.rs","mod.rs","trampoline.rs"]],["engine",[["trap",[],["frame_info.rs","mod.rs","stack.rs"]],["unwind",[],["mod.rs","systemv.rs"]]],["artifact.rs","builder.rs","code_memory.rs","error.rs","inner.rs","link.rs","mod.rs","resolver.rs","tunables.rs"]],["translator",[],["environ.rs","error.rs","middleware.rs","mod.rs","module.rs","sections.rs","state.rs"]]],["compiler.rs","lib.rs","traits.rs"]],\
"wasmer_compiler_cli":["",[["commands",[],["compile.rs","config.rs","validate.rs"]]],["cli.rs","commands.rs","common.rs","error.rs","lib.rs","store.rs","utils.rs"]],\
"wasmer_compiler_cranelift":["",[["debug",[],["address_map.rs","mod.rs"]],["trampoline",[],["dynamic_function.rs","function_call.rs","mod.rs"]],["translator",[],["code_translator.rs","func_environ.rs","func_state.rs","func_translator.rs","mod.rs","translation_utils.rs","unwind.rs"]]],["address_map.rs","compiler.rs","config.rs","dwarf.rs","func_environ.rs","lib.rs"]],\
"wasmer_compiler_llvm":["",[["abi",[],["aarch64_systemv.rs","mod.rs","x86_64_systemv.rs"]],["trampoline",[],["mod.rs","wasm.rs"]],["translator",[],["code.rs","intrinsics.rs","mod.rs","state.rs"]]],["compiler.rs","config.rs","lib.rs","object_file.rs"]],\
"wasmer_compiler_singlepass":["",[],["address_map.rs","arm64_decl.rs","codegen.rs","common_decl.rs","compiler.rs","config.rs","dwarf.rs","emitter_arm64.rs","emitter_x64.rs","lib.rs","location.rs","machine.rs","machine_arm64.rs","machine_x64.rs","unwind.rs","unwind_winx64.rs","x64_decl.rs"]],\
"wasmer_derive":["",[],["lib.rs","value_type.rs"]],\
"wasmer_emscripten":["",[["env",[["unix",[],["mod.rs"]]],["mod.rs"]],["io",[],["mod.rs","unix.rs"]],["syscalls",[],["mod.rs","unix.rs"]]],["bitwise.rs","emscripten_target.rs","errno.rs","exception.rs","exec.rs","exit.rs","inet.rs","jmp.rs","lib.rs","libc.rs","linking.rs","lock.rs","macros.rs","math.rs","memory.rs","process.rs","pthread.rs","signal.rs","storage.rs","time.rs","ucontext.rs","unistd.rs","utils.rs","varargs.rs"]],\
"wasmer_integration_tests_cli":["",[],["assets.rs","fixtures.rs","lib.rs","link_code.rs","util.rs"]],\
"wasmer_middlewares":["",[],["lib.rs","metering.rs"]],\
"wasmer_object":["",[],["error.rs","lib.rs","module.rs"]],\
"wasmer_registry":["",[["graphql",[],["mod.rs","mutations.rs","proxy.rs","queries.rs"]],["package",[],["builder.rs","mod.rs"]]],["api.rs","client.rs","config.rs","interface.rs","lib.rs","login.rs","publish.rs","types.rs","utils.rs","wasmer_env.rs"]],\
"wasmer_sys_utils":["",[["memory",[["fd_memory",[],["fd_mmap.rs","memories.rs","mod.rs"]]],["mod.rs"]]],["lib.rs"]],\
"wasmer_types":["",[["compilation",[],["address_map.rs","function.rs","mod.rs","module.rs","relocation.rs","section.rs","symbols.rs","target.rs","unwind.rs"]],["entity",[],["boxed_slice.rs","iter.rs","keys.rs","mod.rs","packed_option.rs","primary_map.rs","secondary_map.rs"]],["stack",[],["frame.rs","mod.rs","sourceloc.rs","trap.rs"]]],["error.rs","features.rs","indexes.rs","initializers.rs","lib.rs","libcalls.rs","memory.rs","module.rs","serialize.rs","store_id.rs","table.rs","trapcode.rs","types.rs","units.rs","utils.rs","value.rs","vmoffsets.rs"]],\
"wasmer_vm":["",[["instance",[],["allocator.rs","mod.rs"]],["trap",[],["mod.rs","trap.rs","traphandlers.rs"]]],["export.rs","extern_ref.rs","function_env.rs","global.rs","imports.rs","lib.rs","libcalls.rs","memory.rs","mmap.rs","probestack.rs","sig_registry.rs","store.rs","table.rs","threadconditions.rs","vmcontext.rs"]],\
"wasmer_wasix":["",[["bin_factory",[],["binary_package.rs","exec.rs","mod.rs"]],["bindings",[],["mod.rs","wasix_http_client_v1.rs"]],["fs",[],["fd.rs","inode_guard.rs","mod.rs","notification.rs"]],["http",[],["client.rs","client_impl.rs","mod.rs","reqwest.rs"]],["net",[],["mod.rs","socket.rs"]],["os",[["command",[["builtins",[],["cmd_wasmer.rs","mod.rs"]]],["mod.rs"]],["console",[],["cconst.rs","mod.rs"]],["task",[],["control_plane.rs","mod.rs","process.rs","signal.rs","task_join_handle.rs","thread.rs"]],["tty",[],["mod.rs","tty_sys.rs"]]],["common.rs","mod.rs"]],["runners",[["wcgi",[],["handler.rs","mod.rs","runner.rs"]]],["emscripten.rs","mod.rs","runner.rs","wasi.rs","wasi_common.rs"]],["runtime",[["module_cache",[],["fallback.rs","filesystem.rs","mod.rs","shared.rs","thread_local.rs","types.rs"]],["package_loader",[],["builtin_loader.rs","load_package_tree.rs","mod.rs","types.rs","unsupported.rs"]],["resolver",[],["filesystem_source.rs","in_memory_source.rs","inputs.rs","mod.rs","multi_source.rs","outputs.rs","resolve.rs","source.rs","utils.rs","wapm_source.rs","web_source.rs"]],["task_manager",[],["mod.rs","tokio.rs"]]],["mod.rs"]],["state",[["handles",[],["global.rs","mod.rs","thread_local.rs"]]],["builder.rs","env.rs","func_env.rs","mod.rs","types.rs"]],["syscalls",[["legacy",[],["mod.rs","snapshot0.rs"]],["unix",[],["mod.rs"]],["wasi",[],["args_get.rs","args_sizes_get.rs","clock_res_get.rs","clock_time_get.rs","clock_time_set.rs","environ_get.rs","environ_sizes_get.rs","fd_advise.rs","fd_allocate.rs","fd_close.rs","fd_datasync.rs","fd_dup.rs","fd_event.rs","fd_fdstat_get.rs","fd_fdstat_set_flags.rs","fd_fdstat_set_rights.rs","fd_filestat_get.rs","fd_filestat_set_size.rs","fd_filestat_set_times.rs","fd_prestat_dir_name.rs","fd_prestat_get.rs","fd_read.rs","fd_readdir.rs","fd_renumber.rs","fd_seek.rs","fd_sync.rs","fd_tell.rs","fd_write.rs","mod.rs","path_create_directory.rs","path_filestat_get.rs","path_filestat_set_times.rs","path_link.rs","path_open.rs","path_readlink.rs","path_remove_directory.rs","path_rename.rs","path_symlink.rs","path_unlink_file.rs","poll_oneoff.rs","proc_exit.rs","proc_raise.rs","random_get.rs","thread_spawn.rs"]],["wasix",[],["callback_signal.rs","chdir.rs","epoll_create.rs","epoll_ctl.rs","epoll_wait.rs","fd_pipe.rs","futex_wait.rs","futex_wake.rs","futex_wake_all.rs","getcwd.rs","mod.rs","port_addr_add.rs","port_addr_clear.rs","port_addr_list.rs","port_addr_remove.rs","port_bridge.rs","port_dhcp_acquire.rs","port_gateway_set.rs","port_mac.rs","port_route_add.rs","port_route_clear.rs","port_route_list.rs","port_route_remove.rs","port_unbridge.rs","proc_exec.rs","proc_fork.rs","proc_id.rs","proc_join.rs","proc_parent.rs","proc_signal.rs","proc_spawn.rs","resolve.rs","sched_yield.rs","sock_accept.rs","sock_addr_local.rs","sock_addr_peer.rs","sock_bind.rs","sock_connect.rs","sock_get_opt_flag.rs","sock_get_opt_size.rs","sock_get_opt_time.rs","sock_join_multicast_v4.rs","sock_join_multicast_v6.rs","sock_leave_multicast_v4.rs","sock_leave_multicast_v6.rs","sock_listen.rs","sock_open.rs","sock_recv.rs","sock_recv_from.rs","sock_send.rs","sock_send_file.rs","sock_send_to.rs","sock_set_opt_flag.rs","sock_set_opt_size.rs","sock_set_opt_time.rs","sock_shutdown.rs","sock_status.rs","stack_checkpoint.rs","stack_restore.rs","thread_exit.rs","thread_id.rs","thread_join.rs","thread_parallelism.rs","thread_signal.rs","thread_sleep.rs","thread_spawn.rs","tty_get.rs","tty_set.rs"]]],["mod.rs"]],["utils",[],["dummy_waker.rs","mod.rs","owned_mutex_guard.rs","store.rs","thread_parker.rs"]]],["capabilities.rs","lib.rs","macros.rs","rewind.rs"]],\
"wasmer_wasix_experimental_io_devices":["",[],["lib.rs"]],\
"wasmer_wasix_types":["",[["wasi",[],["bindings.rs","bindings_manual.rs","mod.rs","wasix_manual.rs"]],["wasix",[],["mod.rs"]]],["asyncify.rs","lib.rs","types.rs"]],\
"wasmer_wasm_interface":["",[],["interface.rs","interface_matcher.rs","lib.rs","parser.rs","validate.rs"]],\
"wasmer_wast":["",[],["error.rs","lib.rs","spectest.rs","wasi_wast.rs","wast.rs"]]\
}');
createSourceSidebar();
