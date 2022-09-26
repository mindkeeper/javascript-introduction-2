const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number")
    return "Input Invalid: nilai awal dan nilai akhir harus angka";
  if (nilaiAkhir < nilaiAwal)
    return "Nilai akhir harus lebih besar dari pada nilai awal";
  if (typeof dataArray !== "object") return "dataArray Must Be An Array";
  if (dataArray.length <= 5)
    return "Jumlah angka dalam array harus lebih dari 5";
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] !== "number") {
      return "input invalid : all array value must be a number";
    }
  }
  return dataArray
    .sort((a, b) => a - b)
    .filter((e) => e >= nilaiAwal && e <= nilaiAkhir);
};
console.log(seleksiNilai(5, 20, [2, 25, 1, 14, 17, 30, 8]));
