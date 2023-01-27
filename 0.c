#include <emscripten.h>
#include <stdlib.h>
#include <stdio.h>

int main() { return 0; }

EMSCRIPTEN_KEEPALIVE
unsigned char bar(unsigned char *ptr)
{
    for (unsigned int i= 0; i < 9999999; i++);
    return ++(*ptr);
} 

EMSCRIPTEN_KEEPALIVE
void reziro(unsigned char *ptr)
{
    *ptr = 0;
} 


EMSCRIPTEN_KEEPALIVE
void wasmmalloc(unsigned char *ptr,size_t n)
{
    ptr = malloc(n);
}

EMSCRIPTEN_KEEPALIVE
void wasmfree(unsigned char *ptr)
{
    free(ptr);
}