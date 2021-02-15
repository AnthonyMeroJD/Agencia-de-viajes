const areElementsEmpy=(values,titles)=>{

 const errores=[];
 values.forEach((element,index) => {    
   const nameOfData=titles[index];
   element.trim()===''&&errores.push(`EL campo ${nameOfData} esta vacio`);
 });
 return errores;
}

export { areElementsEmpy}