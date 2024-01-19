interface Map<K, V> {
    toArray(): [K, V][];
    Copy(): Map<K, V>;
    Keys(): K[];
    Log(): Map<K, V>;
    Values(): V[];
}
