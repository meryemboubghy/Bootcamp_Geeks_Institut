function convertColor(input) {
  input = input.trim();

  // HEX → RGB
  if (input.startsWith("#")) {
    let hex = input.slice(1);

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }

  // RGB → HEX
  else if (input.startsWith("rgb")) {
    const nums = input.match(/\d+/g);
    if (!nums || nums.length < 3) return null;

    const hex = nums
      .slice(0, 3)
      .map((n) => {
        const hexPart = parseInt(n).toString(16);
        return hexPart.length === 1 ? "0" + hexPart : hexPart;
      })
      .join("");

    return `#${hex}`;
  } else {
    return "Invalid color format";
  }
}
console.log(convertColor("#ffcc00"));
console.log(convertColor("#fc0"));
console.log(convertColor("rgb(255, 204, 0)"));
console.log(convertColor("rgb(15, 40, 100)"));
