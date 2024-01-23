export const validatelength = (num, text) => {
      if(typeof text === 'string') {
        if(text.length >=num) {
            return true;
        }
    }
    return false;
}
