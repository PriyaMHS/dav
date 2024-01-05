import { PhonenumberPipe } from './phonenumber.pipe';

describe('PhonenumberPipe', () => {
  let pipe: PhonenumberPipe;
  beforeEach(()=> {
    pipe = new PhonenumberPipe();
  })
  fit('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  fit('should format in india', () => {
    expect(pipe.transform('1234567890', 'india')).toEqual('+91 12 3456 7890');
  });

  fit('should format in usa format', () => {
    expect(pipe.transform('1234567890')).toEqual('+1 (123) 456 - 7890');
  });
});
