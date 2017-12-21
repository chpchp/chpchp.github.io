/// <reference path="register.ts" />
/// <reference path="unittest.ts" />
/// <reference path="assert.ts" />

namespace register_test {

unittest.register("register_test.test_read_write", function() {
  let reg = new register.Register(0);
  assert.assert_eq(reg.read(), 0);
  for (let i = 1; i < 10; ++i) {
    reg.write(i);
    assert.assert_eq(reg.read(), i);
  }
});

unittest.register("register_test.test_call", function() {
  let reg = new register.Register(0);
  assert.assert_eq(reg.call("read")(), 0);
  for (let i = 1; i < 10; ++i) {
    reg.call("write")(i);
    assert.assert_eq(reg.call("read")(), i);
  }
});

} // namespace register_test
