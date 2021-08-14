export const vertexShaderSource = `#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec4 p0;
in vec4 p1;
uniform float t;
uniform mat4 mc;
const float exponent = -16.0;

// all shaders have a main function
void main() {

  // gl_Position is a special variable a vertex shader
  // is responsible for setting
  gl_Position = mc * mix(p0, p1, t);
}
`;

export const fragmentShaderSource = `#version 300 es

// fragment shaders don't have a default precision so we need
// to pick one. highp is a good default. It means "high precision"
precision highp float;

// we need to declare an output for the fragment shader
out vec4 fc;

void main() {
  // Just set the output to a constant redish-purple
  fc = vec4(1, 0, 0, 1);
}
`;
