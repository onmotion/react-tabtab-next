function deleteHelper(sequence: [], deleteIndex: number) {
    return sequence.filter((_, i) => i !== deleteIndex);
}

export default deleteHelper;
