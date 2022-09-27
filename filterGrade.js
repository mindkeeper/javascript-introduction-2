const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number")
    return "Input Invalid: nilai awal dan nilai akhir harus angka";
  if (nilaiAkhir < nilaiAwal)
    return "Nilai akhir harus lebih besar dari pada nilai awal";
  if (!Array.isArray(dataArray)) return "dataArray Must Be An Array"; //gunakan Array.isArray(dataArray)
  if (dataArray.length <= 5)
    return "Jumlah angka dalam array harus lebih dari 5";
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] !== "number") {
      return "input invalid : all array value must be a number";
    }
  }
  const result = dataArray
    .sort((a, b) => a - b)
    .filter((e) => e >= nilaiAwal && e <= nilaiAkhir);

  if (result.length === 0) return "Data Not Found";
  return result;
};
console.log(seleksiNilai(5, 20, [1, 2, 3, 4, 3, 2]));
