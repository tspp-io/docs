
import React from 'react';

export default function Codebase() {
  return (
    <div className="container">
      <h1>Compiler Architecture</h1>
      
      <section>
        <h2>Overview</h2>
        <p>
          The tspp compiler is a modular system written in C++17 that compiles tspp source code into LLVM IR, 
          which is then compiled to native machine code using Clang/LLVM.
        </p>
      </section>

      <section>
        <h2>Compilation Pipeline</h2>
        <ol>
          <li>
            <strong>Lexical Analysis (Lexer)</strong>: 
            Converts source code into a stream of tokens (<code>src/lexer</code>, <code>src/tokens</code>).
          </li>
          <li>
            <strong>Parsing (Parser & AST Construction)</strong>: 
            Builds an Abstract Syntax Tree (AST) from tokens (<code>src/parser</code>).
          </li>
          <li>
            <strong>Semantic Analysis</strong>: 
            Verifies types, resolves scopes, and checks for errors (<code>src/parser/visitors/semantic</code>).
          </li>
          <li>
            <strong>Code Generation (LLVM IR)</strong>: 
            Generates LLVM Intermediate Representation (<code>src/codegen</code>).
          </li>
          <li>
            <strong>Native Compilation</strong>: 
            Uses Clang/LLVM to compile IR to machine code.
          </li>
        </ol>
      </section>

      <section>
        <h2>Project Structure</h2>
        <ul>
          <li><code>src/lexer/</code>: Lexical analysis and tokenization.</li>
          <li><code>src/parser/</code>: Parsing logic and AST construction.</li>
          <li><code>src/ast/</code>: Abstract Syntax Tree node definitions.</li>
          <li><code>src/codegen/</code>: LLVM IR code generation.</li>
          <li><code>src/interpreter/</code>: JIT interpreter for REPL.</li>
          <li><code>src/core/</code>: Common utilities and diagnostics.</li>
          <li><code>src/tokens/</code>: Token definitions.</li>
          <li><code>src/main.cpp</code>: Compiler entry point.</li>
        </ul>
      </section>
    </div>
  );
}
