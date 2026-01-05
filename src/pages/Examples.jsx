
import React from 'react';

export default function Examples() {
  return (
    <div className="container">
      <h1>Examples</h1>
      
      <section>
        <h2>Hello World & Features</h2>
        <p>A simple program demonstrating memory regions, SIMD, and smart pointers.</p>
        <pre>{`// hello.tspp - A simple tspp program
#stack string message = "Hello, tspp World!";

function main(): void {
    console.log(message);
    
    // Demonstrate memory regions
    #heap int* numbers = new int[10];
    #stack int counter = 0;
    
    // SIMD operations
    #simd float[4] vector = [1.0, 2.0, 3.0, 4.0];
    
    // Smart pointer usage
    #shared<MyClass> obj = make_shared<MyClass>();
}`}</pre>
      </section>

      <section>
        <h2>System Library Implementation</h2>
        <p>Demonstrating low-level system calls and inline assembly.</p>
        <pre>{`// System library for TSPP

const SYS_read = 0;
const SYS_write = 1;
const SYS_exit = 60;

function exit(code: int): void {
    __builtin_syscall(SYS_exit, code);
}

function write(fd: int, buf: string, len: int): int {
    return __builtin_syscall(SYS_write, fd, buf, len);
}

function strlen(s: string): int {
    let len: int = 0;
    let ptr: string = s;
    #asm("xor %rax, %rax; mov $1, %rdi; cmp $$0, %rdi; je 2f; 1: cmpb $$0, (%rdi); je 2f; inc %rdi; inc %rax; jmp 1b; 2: mov %eax, $0" : "=r"(len) : "r"(ptr) : "rax", "rdi", "cc");
    return len;
}
`}</pre>
      </section>
    </div>
  );
}
