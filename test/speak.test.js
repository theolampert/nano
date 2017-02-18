import test from 'tape';
import speak from '../src/speak.js';

test('speak module', (t) => {
  const expected = 'Hello world';
  const log = speak(expected);
  t.equal(log, expected);
  t.end();
});
