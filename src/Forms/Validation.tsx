export default function validateIinput(value: string, charQuantity: number, wordsQuantity: number) {
    const words = value.split(' ');
    const nameUser = /^([A-Z])/;
    if (words.length < wordsQuantity) {
      return false;
    }
    const correctWords = words.filter((word) => {
      return nameUser.test(word) && word.length >= charQuantity;
    });
    return correctWords.length >= words.length;
  }
  
  export function validateDate(date: string) {
    const userDateUs = Date.parse(date);
    const currentDateUs = Date.now();
    if (!userDateUs) {
      return false;
    }
    return currentDateUs >= userDateUs;
  }
  
  export function validateFile(file: File, availableTypes: string[]) {
    if (!file) {
      return false;
    }
    const fileType = availableTypes.filter((type: string) => {
      return file.type === type;
    });
    return fileType.length === 1;
  }
  
  export function validateRradio(...inputsValue: boolean[]) {
    const explicit = inputsValue.filter((inputValue) => {
      return inputValue;
    });
    return !!explicit.length;
  }