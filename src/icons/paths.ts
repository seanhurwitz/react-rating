const getStarPath = (size: number) => {
  const x0 = 0,
    x1 = (size * 3) / 24,
    x2 = (size * 6) / 24,
    x3 = (size * 8) / 24,
    x4 = (size * 12) / 24,
    x5 = size - x3,
    x6 = size - x2,
    x7 = size - x1,
    x8 = size - x0,
    y0 = 0,
    y1 = (size * 5) / 15,
    y2 = (size * 9.5) / 15,
    y3 = (size * 12) / 15,
    y4 = size;
  return `M ${x4}, ${y0}
    L ${x3}, ${y1}
    L ${x0}, ${y1}
    L ${x2}, ${y2}
    L ${x1}, ${y4}
    L ${x4}, ${y3}
    L ${x7}, ${y4}
    L ${x6}, ${y2}
    L ${x8}, ${y1}
    L ${x5}, ${y1}
    Z
    `;
};

const getHeartPath = (size: number) => {
  const x1 = (size * 1) / 10,
    x2 = (size * 2) / 10,
    x3 = (size * 5) / 10,
    x4 = (size * 9) / 10,
    y1 = (size * 2) / 10,
    y2 = (size * 3) / 10,
    y3 = (size * 6) / 10,
    y4 = (size * 9) / 10;
  return `M ${x1},${y2}
    A ${x2},${y1} 0,0,1 ${x3},${y2}
    A ${x2},${y1} 0,0,1 ${x4},${y2}
    Q ${x4},${y3} ${x3},${y4}
    Q ${x1},${y3} ${x1},${y2}
    Z
    `;
};

export { getHeartPath, getStarPath };
