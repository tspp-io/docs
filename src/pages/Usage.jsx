
import React from 'react';

export default function Usage() {
  return (
    <div className="container">
      <h1>Usage</h1>
      
      <section>
        <h2>REPL Mode</h2>
        <p>Running the compiler without arguments starts the Read-Eval-Print Loop (REPL).</p>
        <pre><code>./build/src/tspp</code></pre>
        <p>You can type tspp code directly into the console.</p>
      </section>

      <section>
        <h2>Compiling Files</h2>
        <p>To compile a source file, pass the filename as an argument.</p>
        <pre><code>./build/src/tspp &lt;source_file&gt;</code></pre>
      </section>

      <section>
        <h2>Writing Your First Program</h2>
        <p>Create a file named <code>hello.tspp</code>:</p>
        <pre><code>// hello.tspp
function main(): void &#123;
    console.log("Hello, tspp!");
&#125;</code></pre>
        <p>Compile and run:</p>
        <pre><code>./build/src/tspp hello.tspp</code></pre>
      </section>
    </div>
  );
}
