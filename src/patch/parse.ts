  const match = headerLine
    .trim()
    .match(/^@@ -(\d+)(,(\d+))? \+(\d+)(,(\d+))? @@.*/)
        this._fileMode = this.currentLine
          .slice("deleted file mode ".length)
          .trim()
        if (
          !this.lines[this.i].startsWith("--- /dev/null") &&
          !this.lines[this.i + 1].startsWith("--- /dev/null")
        ) {
          const match = this.lines[this.i - 2].match(
            /^diff --git a\/(.+) b\/(.+)$/,
          )
    if (
      !this.isEOF &&
      this.currentLine.startsWith("\\ No newline at end of file")
    ) {
        throw new Error(
          "hunk header integrity check failed when parsing file deletion",
        )
        throw new Error(
          "hunk header integrity check failed when parsing file addition",
        )
        while (
          this.currentLineIsPartOfHunk() &&
          !(this.isOneLineLeft && this.currentLine === "")
        ) {
          (
            { originalLength, patchedLength },
            { type, lines }: PatchMutationPart,
          ) => {
        if (
          endSize.originalLength !== header.original.length ||
          endSize.patchedLength !== header.patched.length
        ) {
          throw new Error(
            "hunk header integrity check failed when parsing file addition",
          )