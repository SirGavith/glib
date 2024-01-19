interface Boolean {
    IsTrue(action: () => void): void;
    IsFalse(action: () => void): void;
    Log(): boolean;
}
