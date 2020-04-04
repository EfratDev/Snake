function randMod(max, mod) {
    x = Math.floor(Math.random() * (max - mod));
    return x - x % mod;
}