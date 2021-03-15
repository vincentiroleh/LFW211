# Section Overview

Handling binary data in server-side programming is an essential capability. In Node.js binary data is handled with the Buffer constructor. When an encoding isn't set, reading from the file system, or from a network socket, or any type of I/O will result in one more array-like instances that inherit from the Buffer constructor. In this chapter we'll explore how to handle binary data in Node.

## Learning Objectives

By the end of this section, you should be able to:

- Understand the anatomy of a Buffer instance.
- Safely and unsafely create buffers.
- Convert between buffers and other data structures.