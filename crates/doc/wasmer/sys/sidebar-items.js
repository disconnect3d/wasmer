initSidebarItems({"constant":[["HOST","The `Triple` of the current host."],["VERSION","Version number of this crate."],["WASM_MAX_PAGES","The number of pages we can have before we run out of byte index space."],["WASM_MIN_PAGES","The minimum number of pages allowed."],["WASM_PAGE_SIZE","WebAssembly page sizes are fixed to be 64KiB. Note: large page support may be added in an opt-in manner in the future."]],"derive":[["ValueType",""]],"enum":[["Architecture","The “architecture” field, which in some cases also specifies a specific subarchitecture."],["CallingConvention","The calling convention, which specifies things like which registers are used for passing arguments, which registers are callee-saved, and so on."],["CompileError","The WebAssembly.CompileError object indicates an error during WebAssembly decoding or validation."],["CpuFeature","The nomenclature is inspired by the `cpuid` crate. The list of supported features was initially retrieved from `cranelift-native`."],["CraneliftOptLevel","Possible optimization levels for the Cranelift codegen backend."],["DeserializeError","The Deserialize error can occur when loading a compiled Module from a binary."],["ExportIndex","An entity to export."],["ExternType","A list of all possible types which can be externally referenced from a WebAssembly module."],["GlobalInit","Globals are initialized via the `const` operators or by referring to another import."],["LLVMOptLevel","Defines the optimization level used to compile a `Module`."],["LinkError","The WebAssembly.LinkError object indicates an error during module instantiation (besides traps from the start function)."],["MemoryError","Error type describing things that can go wrong when operating on Wasm Memories."],["Mutability","Indicator of whether a global is mutable or not"],["OperatingSystem","The “operating system” field, which sometimes implies an environment, and sometimes isn’t an actual operating system."],["ParseCpuFeatureError","The error that can happen while parsing a `str` to retrieve a `CpuFeature`."],["SerializeError","The Serialize error can occur when serializing a compiled Module into a binary."],["Type","A list of all possible value types in WebAssembly."],["WasmError","A WebAssembly translation error."]],"fn":[["is_wasm","Check if the provided bytes are wasm-like"],["raise_user_trap","Raises a user-defined trap immediately."],["wat2wasm","Parses in-memory bytes as either the WebAssembly Text format, or a binary WebAssembly module."]],"mod":[["exports",""],["extern_ref",""],["externals",""],["function_env",""],["imports","The import module contains the implementation data structures and helper functions used to manipulate and access a wasm module’s imports including memories, tables, globals, and functions."],["instance",""],["mem_access",""],["module",""],["native","Native Functions."],["native_type","This module permits to create native functions easily in Rust, thanks to its advanced typing system."],["ptr",""],["store",""],["tunables",""],["value",""],["vm","The `vm` module re-exports wasmer-vm types."]],"struct":[["Artifact","A compiled wasm module, ready to be instantiated."],["Backend","The Backend builder"],["Bytes","Units of WebAssembly memory in terms of 8-bit bytes."],["Cranelift","Global configuration options used to create an `wasmer_engine::Engine` and customize its behavior."],["Engine","A WebAssembly `Universal` Engine."],["ExportType","A descriptor for an exported WebAssembly value."],["Features","Controls which experimental features will be enabled. Features usually have a corresponding WebAssembly proposal."],["FrameInfo","Description of a frame in a backtrace for a `RuntimeError::trace`."],["FunctionType","The signature of a function that is either implemented in a Wasm module or exposed to Wasm by the host."],["GlobalType","WebAssembly global."],["ImportType","A descriptor for an imported value into a wasm module."],["LLVM",""],["LocalFunctionIndex","Index type of a function defined locally inside the WebAssembly module."],["Memory32","Marker trait for 32-bit memories."],["Memory64","Marker trait for 64-bit memories."],["MemoryType","A descriptor for a WebAssembly memory type."],["MiddlewareError","A error in the middleware."],["MiddlewareReaderState","The state of the binary reader. Exposed to middlewares to push their outputs."],["Pages","Units of WebAssembly pages (as specified to be 65,536 bytes)."],["RuntimeError","A struct representing an aborted instruction execution, with a message indicating the cause."],["Singlepass",""],["TableType","A descriptor for a table in a WebAssembly module."],["Target","This is the target that we will use for compiling the WebAssembly ModuleInfo, and then run it."],["Triple","A target “triple”. Historically such things had three fields, though they’ve added additional fields over time."]],"trait":[["CompilerConfig","The compiler configuration options."],["FunctionMiddleware","A function middleware specialized for a single function."],["MemorySize","Trait for the `Memory32` and `Memory64` marker types."],["ModuleMiddleware","A shared builder for function middlewares."],["Tunables","An engine delegates the creation of memories, tables, and globals to a foreign implementor of this trait."],["ValueType","Trait for a Value type. A Value type is a type that is always valid and may be safely copied."]],"type":[["NativeFunc","This type is deprecated, it has been replaced by TypedFunction."],["WasmResult","A convenient alias for a `Result` that uses `WasmError` as the error type."]]});