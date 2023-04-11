const longestRepetition = (text: string): [string, number] => {
  let longest_str = '';
  let count = 0;

  const text_splited = text.split('').map(e => e.toLowerCase());
  text_splited.map((e: string) => {
    const char_count = text_splited.filter((a: string) => a === e).length
    if(char_count > count) {
      if(longest_str === e) {
        count += char_count;
      } else {
        longest_str = e;
        count = char_count;;
      }
    }
  })

  return [longest_str, count]
}

console.log(longestRepetition('bbbaaabaaaa'))
