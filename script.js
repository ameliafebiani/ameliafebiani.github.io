const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) =>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
})

const listmobil = (index = false) => {
  let data = [
    {
      name: "Toyota New Innova Reborn",
      harga: 850000,
      id: 0,
    },
    {
      name: "Mitsubishi Pajero",
      harga: 1200000,
      id: 1,
    },
    {
      name: "Hiace Premio",
      harga: 2100000,
      id: 2,
    },
  ];
  if (data[index]) {
    return data[index];
  }
  return data;
};

const convertRange = (date) => {
  let rangeDate = date.split(" to ");
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(rangeDate[0]);
  const secondDate = new Date(rangeDate[1]);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
};

const crud = () => {
  return {
    addMode: true,
    id: "",
    form: {
      name: "",
      mobil: {},
      waktu: "",
      total: 0,
    },
    students: [],
    detail(student, index) {
      new bootstrap.Modal("#editData", {
        keyboard: false,
      }).show();

      this.form.name = student.name;
      this.form.mobil = student.mobil.id;
      this.form.waktu = student.waktu;
      this.form.total = student.total;
      this.id = index;
    },
    saveData() {
      if (this.form.name.length && this.form.mobil.length) {
        console.log(this.form);
        this.students.push({
          name: this.form.name,
          mobil: listmobil(this.form.mobil),
          waktu: this.form.waktu,
          total: this.form.total,
        });
        this.resetForm();
      }
    },
    updateData() {
      if (this.form.name.length && this.form.mobil.length) {
        this.students.splice(this.id, 1, {
          name: this.form.name,
          mobil: listmobil(this.form.mobil),
          waktu: this.form.waktu,
          total: this.form.total,
        });
        this.resetForm();
      }
    },
    deleteData(index) {
      this.students.splice(index, 1);
    },
    resetForm() {
      this.form.name = "";
      this.form.mobil = {};
      this.form.waktu = "";
      this.addMode = true;
    },
  };
};
