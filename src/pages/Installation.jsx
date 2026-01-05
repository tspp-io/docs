
import React from 'react';

export default function Installation() {
  return (
    <div className="container">
      <h1>Installation</h1>
      
      <section>
        <h2>Prerequisites</h2>
        <ul>
          <li><strong>C++ Compiler</strong>: GCC 9+ or Clang 10+</li>
          <li><strong>CMake</strong>: Version 3.14 or higher</li>
          <li><strong>LLVM</strong>: Version 17 or higher</li>
          <li><strong>Boehm GC</strong>: For garbage collection support</li>
        </ul>
      </section>

      <section>
        <h2>Install Dependencies</h2>
        
        <h3>Ubuntu/Debian</h3>
        <pre><code>sudo apt-get update
sudo apt-get install build-essential cmake llvm-17 llvm-17-dev libgc-dev</code></pre>

        <h3>macOS</h3>
        <pre><code>brew install cmake llvm bdw-gc</code></pre>
      </section>

      <section>
        <h2>Building from Source</h2>
        <ol>
          <li>Clone the repository:
            <pre><code>git clone https://github.com/theQuarky/tspp.git
cd tspp</code></pre>
          </li>
          <li>Build the project:
            <pre><code>./build.sh</code></pre>
          </li>
        </ol>
        <p>The binary will be located at <code>./build/src/tspp</code>.</p>
      </section>
    </div>
  );
}
