(function() {var implementors = {};
implementors["wasmer"] = [{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"enum\" href=\"wasmer/access/enum.SliceCow.html\" title=\"enum wasmer::access::SliceCow\">SliceCow</a>&lt;'a, T&gt;","synthetic":false,"types":["wasmer::access::SliceCow"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"wasmer/access/struct.WasmSliceAccess.html\" title=\"struct wasmer::access::WasmSliceAccess\">WasmSliceAccess</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"wasmer/trait.ValueType.html\" title=\"trait wasmer::ValueType\">ValueType</a>,&nbsp;</span>","synthetic":false,"types":["wasmer::access::WasmSliceAccess"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"enum\" href=\"wasmer/access/enum.RefCow.html\" title=\"enum wasmer::access::RefCow\">RefCow</a>&lt;'a, T&gt;","synthetic":false,"types":["wasmer::access::RefCow"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"wasmer/access/struct.WasmRefAccess.html\" title=\"struct wasmer::access::WasmRefAccess\">WasmRefAccess</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"wasmer/trait.ValueType.html\" title=\"trait wasmer::ValueType\">ValueType</a>,&nbsp;</span>","synthetic":false,"types":["wasmer::access::WasmRefAccess"]}];
implementors["wasmer_types"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()