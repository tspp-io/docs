
import React from 'react';

export default function Features() {
  return (
    <div className="container">
      <h1>tspp Language Features</h1>
      
      <div className="alert alert-info" style={{ background: 'rgba(88, 166, 255, 0.1)', border: '1px solid #58a6ff', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <strong>Note:</strong> tspp is currently in active development. Some features listed below are experimental or planned for future releases.
      </div>

      <section>
        <h2>Memory Model</h2>
        <p>tspp provides explicit memory region selection for variables and objects.</p>
        <ul>
          <li><code>#stack</code>: Allocate on the stack (default for local variables).</li>
          <li><code>#static</code>: Static allocation (global variables).</li>
          <li><code>#heap</code>: Allocate on the heap (via <code>new</code> operator).</li>
        </ul>
        <pre><code>#stack int x = 5;
#static int globalCounter = 0;
int* ptr = new int[10]; // Heap allocation</code></pre>
      </section>

      <section>
        <h2>Pointer Types <span className="badge badge-experimental">Experimental</span></h2>
        <ul>
          <li><code>@unsafe</code>: Raw pointer, unchecked access.</li>
          <li><code>@aligned</code>: Pointer with alignment guarantees.</li>
        </ul>
        <pre><code>@unsafe int* ptr;</code></pre>
      </section>

      <section>
        <h2>Smart Pointers <span className="badge badge-experimental">Experimental</span></h2>
        <p>Ownership and lifetime management (Implementation in progress).</p>
        <ul>
          <li><code>#shared&lt;T&gt;</code></li>
          <li><code>#unique&lt;T&gt;</code></li>
          <li><code>#weak&lt;T&gt;</code></li>
        </ul>
        <pre><code>#shared&lt;MyClass&gt; obj;</code></pre>
      </section>

      <section>
        <h2>SIMD and Cache Control <span className="badge badge-experimental">Experimental</span></h2>
        <ul>
          <li><code>#simd</code>: Vectorized operations (Attribute support only).</li>
          <li><code>#prefetch</code>: Manual cache prefetching.</li>
        </ul>
        <pre><code>#simd float[4] v; 
#prefetch v;</code></pre>
      </section>

      <section>
        <h2>Compile-Time Execution</h2>
        <ul>
          <li><code>#const</code>, <code>#constexpr</code>: Compile-time evaluation and constants.</li>
        </ul>
        <pre><code>#const int N = 10;</code></pre>
      </section>

      <section>
        <h2>Zero-Cost Abstraction <span className="badge badge-experimental">Experimental</span></h2>
        <ul>
          <li><code>#zerocast</code>: Inline generics, no runtime overhead.</li>
        </ul>
        <pre><code>#zerocast function&lt;T&gt;(T x) &#123; ... &#125;</code></pre>
      </section>

      <section>
        <h2>Safety and Concurrency <span className="badge badge-planned">Planned</span></h2>
        <p>The following features are part of the roadmap for future releases:</p>
        <ul>
          <li><code>go</code> routines and channels (Go-style concurrency).</li>
          <li><code>#atomic</code>: Atomic operations.</li>
          <li><code>#pinned</code>: Prevents object movement in memory.</li>
        </ul>
      </section>
    </div>
  );
}
