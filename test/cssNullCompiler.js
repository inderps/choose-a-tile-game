function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.png'] = noop;
require.extensions['.woff'] = noop;
