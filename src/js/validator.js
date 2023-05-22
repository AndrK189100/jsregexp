export default class Validator {
  constructor() {
    throw new Error('create object is forbidden');
  }

  static validateUsername(nickname) {
    if ((nickname.search(/^[a-zA-Z][-\w]*[a-zA-Z]$/) === -1) || (nickname.search(/\d{3}/) !== -1)) { throw new Error('nickname wrong'); }
    return true;
  }

  static validatePhone(phone) {
    const p = Array.from(phone.matchAll(/\D*(\d{1,2})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d{1})\D*(\d*)?/g))[0];

    if (p[p.length - 1] === undefined) { p.pop(); }
    if (p.length === 13) {
      p[1] += p[2];
      p.splice(2, 1);
    }

    let cleanPhone = `+${p[1] === '8' ? '7' : p[1]}`;
    for (let i = 2; i < p.length; i += 1) {
      cleanPhone += p[i];
    }
    return cleanPhone;
    // return `+${p[1] === '8' ? '7' : p[1]}${p[2]}${p[3]}${p[4]}${p[5]}`;
  }
}
