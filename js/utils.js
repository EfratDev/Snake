function randMod(max, mod) {
    x = Math.floor(Math.random() * (max));
    return x - x % mod;
}