
import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container home-container">
      <div className="hero">
        <img src="logo.png" alt="tspp Logo" style={{ height: '120px', marginBottom: '2rem', filter: 'drop-shadow(0 0 20px rgba(88, 166, 255, 0.3))' }} />
        <h1>tspp Programming Language</h1>
        <p className="tagline">
          A modern systems programming language combining TypeScript-like syntax with Go-style semantics.
        </p>
        <div className="badges">
          <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
          <img src="https://img.shields.io/badge/language-C++-blue.svg" alt="Language" />
          <img src="https://img.shields.io/badge/powered%20by-LLVM-brightgreen.svg" alt="LLVM" />
        </div>
        <div className="cta-buttons">
          <Link to="/installation" className="btn btn-primary">Get Started</Link>
          <Link to="/features" className="btn btn-secondary">Learn More</Link>
        </div>
      </div>

      <section className="overview">
        <h2>Overview</h2>
        <p>
          tspp is an innovative programming language that brings together the familiar syntax of TypeScript 
          with the performance and concurrency model of Go. It compiles to LLVM IR, enabling high-performance 
          native code generation while providing advanced memory management, explicit control over memory regions, 
          smart pointers, and zero-cost abstractions.
        </p>
      </section>

      <section className="key-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚀 Performance-First</h3>
            <p>Compiles to optimized LLVM IR for native speed.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Memory Safety</h3>
            <p>Explicit memory region control (<code>#stack</code>, <code>#static</code>) and heap allocation.</p>
          </div>
          <div className="feature-card">
            <h3>🧠 Smart Pointers</h3>
            <p>Built-in support for <code>#shared&lt;T&gt;</code>, <code>#unique&lt;T&gt;</code> (Experimental).</p>
          </div>
          <div className="feature-card">
            <h3>⚡ SIMD Operations</h3>
            <p>Native vectorization attributes with <code>#simd</code>.</p>
          </div>
          <div className="feature-card">
            <h3>🔧 Zero-Cost Abstractions</h3>
            <p><code>#zerocast</code> for compile-time optimizations.</p>
          </div>
          <div className="feature-card">
            <h3>🛡️ Safety Controls</h3>
            <p><code>@unsafe</code> annotations for explicit unsafe operations.</p>
          </div>
          <div className="feature-card">
            <h3>🎯 TypeScript Syntax</h3>
            <p>Familiar syntax for web developers.</p>
          </div>
          <div className="feature-card">
            <h3>🔄 Go Semantics</h3>
            <p>Planned: Goroutine-inspired concurrency model.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
