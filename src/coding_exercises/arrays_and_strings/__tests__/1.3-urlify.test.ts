import { urlify } from '../1.3-urlify';

describe('URLify', () => {
  it('should replace spaces with %20 in a simple string', () => {
    expect(urlify('Mr John Smith', 13)).toBe('Mr%20John%20Smith');
  });

  it('should handle string with no spaces', () => {
    expect(urlify('HelloWorld', 10)).toBe('HelloWorld');
  });

  it('should handle string with multiple consecutive spaces', () => {
    expect(urlify('Hello   World', 13)).toBe('Hello%20%20%20World');
  });

  it('should handle string with leading and trailing spaces', () => {
    expect(urlify('  Hello World  ', 15)).toBe('%20%20Hello%20World%20%20');
  });

  it('should handle empty string', () => {
    expect(urlify('', 0)).toBe('');
  });

  it('should handle a string with more characters than the input length', () => {
    expect(urlify('Mr John Smith went to Hollywood and gave it his all', 13)).toBe('Mr%20John%20Smith');
  });
}); 