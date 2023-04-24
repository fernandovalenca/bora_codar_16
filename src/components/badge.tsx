type BadgeProps = {
  keyLetter: string;
  visible: boolean;
};

export default function Badge({ keyLetter, visible }: BadgeProps) {
  function randomDarkHexColor(): string {
    const hexChars = "0123456789ABCDEF";
    const generatedColors = new Set<string>();
    let hexColor = "";
    const isValidHex = (value: string): boolean => {
      const hexRegex = /^#[0-9A-F]{6}$/i;
      return hexRegex.test(value);
    };
    do {
      hexColor = "#";
      for (let i = 0; i < 6; i++) {
        const randomChar = hexChars[Math.floor(Math.random() * 16)];
        hexColor += randomChar;
      }
      const rgbColor = parseInt(hexColor.slice(1), 16);
      const darkRgbColor = Math.floor(rgbColor / 2);
      const darkHexColor = darkRgbColor.toString(16);
      hexColor = `#${darkHexColor}`;
    } while (generatedColors.has(hexColor) || !isValidHex(hexColor));

    generatedColors.add(hexColor);
    return hexColor;
  }

  const color = randomDarkHexColor();

  return (
    <div
      className="h-10 w-10 flex items-center justify-center rounded-lg text-center"
      style={
        visible
          ? {
              backgroundColor: color,
            }
          : {
              backgroundColor: "transparent",
            }
      }
    >
      <span
        className={`block text-base font-bold text-white ${
          !visible && `hidden`
        }`}
      >
        {keyLetter}
      </span>
    </div>
  );
}
