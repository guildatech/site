const TOKEN_KEY = '@guildatech-Token';
export default class Auth {
  static isAuthenticated() {
    return this.getToken() !== null;
  }
  static getToken() {
    if (typeof window !== 'undefined') return localStorage.getItem(TOKEN_KEY);
    else return null;
  }
  static login(token) {
    if (typeof window !== 'undefined') localStorage.setItem(TOKEN_KEY, token);
  }
  static logout() {
    if (typeof window !== 'undefined') localStorage.removeItem(TOKEN_KEY);
  }
}
