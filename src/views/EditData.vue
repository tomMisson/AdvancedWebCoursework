<template>
<div>
     <h2>Data Update</h2> 
    <form id="manualdata" v-if="!isProcessing" style="position: absolute;
  left: 150px;"> 
     <h5> (All input must be a number)</h5>
       <p>Cardiomyopathy Type：
    <select v-model="scar">
      <option>Dilated cardiomyopathy</option>
      <option>Hypertrophic cardiomyopathy</option>
      <option>Restrictive cardiomyopathy</option>
      <option>Arrhythmogenic right ventricular dysplasia</option>
      <option>Unclassified cardiomyopathy</option>
    </select>
   </p>
  <p>Left ventricular end diastolic volume (LEDV) :</p>
         <input type="text" v-model="LEDV" @keypress="isNumber($event)"> 
  <p>Right ventricular end diastolic volume (REDV) :</p>
        <input type="text" v-model="REDV" @keypress="isNumber($event)">
    <p>Left ventricular end systolic volume (LESV) : </p>
        <input type="text" v-model="LESV" @keypress="isNumber($event)">
    <p>Right ventricular end systolic volume (RESV) :</p>
         <input type="text" v-model="RESV" @keypress="isNumber($event)">
    <p>Left ventricular ejection fraction (LVEF) :</p>
        <input type="text" v-model="LVEF" @keypress="isNumber($event)"> 
    <p>Right ventricular ejection fraction (RVEF) :</p>
        <input type="text" v-model="RVEF" @keypress="isNumber($event)">
    <p>Left ventricular mass (LVMASS) : </p>
        <input type="text" v-model="LVMASS" @keypress="isNumber($event)">
    <p>Right ventricular mass (RVMASS) : </p>
        <input type="text" v-model="RVMASS" @keypress="isNumber($event)">
    <p>Left systolic volume (LSV) :</p>
        <input type="text" v-model="LSV" @keypress="isNumber($event)">
    <p>Right systolic volume (RSV) : </p>
        <input type="text" v-model="LSV" @keypress="isNumber($event)">

   <p>Fibrosis or Scarring：
    <select v-model="scar">
      <option>fibrosis</option>
      <option>scarring</option>
    </select>
   </p>
   <p>Gender :
    <select v-model="gender">
      <option>Male</option>
      <option>Female</option>
      <option>Prefer not to say</option>
    </select>
   </p>

    <p>Age at MRI :
    <input type="text" v-model="MRI" @keypress="isNumber($event)">
  </p>
    <p>Apical HCM :
    <input type="radio" name="HCM" value="Yes" v-model="HCM"> Yes
    <input type="radio" name="HCM" value="No" v-model="HCM"> No
  </p>

    <p>Sudden cardiac death : 
    <input type="radio" name="SCD" value="Yes" v-model="SCD"> Yes
    <input type="radio" name="SCD" value="No" v-model="SCD"> No
  </p>
    <p>Hypertension : 
    <input type="radio" name="Hypertension" value="Yes" v-model="Hypertension"> Yes
    <input type="radio" name="Hypertension" value="No" v-model="Hypertension"> No
  </p>
    <p>Diabetes : 
    <input type="radio" name="diabetes" value="Yes" v-model="diabetes"> Yes
    <input type="radio" name="diabetes" value="No" v-model="diabetes"> No
  </p>
    <p>Myectomy : 
    <input type="radio" name="myectomy" value="Yes" v-model="myectomy"> Yes
    <input type="radio" name="myectomy" value="No" v-model="myectomy"> No
  </p>
    <p>HCM gene mutations :  </p>
    <input type="radio" name="mutations" value="MYH7" v-model="myectomy"> MYH7
    <input type="radio" name="mutations" value="MYBPC3" v-model="myectomy"> MYBPC3
    <input type="radio" name="mutations" value="TNNT2" v-model="myectomy"> TNNT2
    <input type="radio" name="mutations" value="ACTC" v-model="myectomy"> ACTC
    <input type="radio" name="mutations" value="TPM1" v-model="myectomy"> TPM1
    <input type="radio" name="mutations" value="TNNCI" v-model="myectomy"> TNNCI
    <input type="radio" name="mutations" value="TNNI3" v-model="myectomy"> TNNI3
    <input type="radio" name="mutations" value="MYL2" v-model="myectomy"> MYL2
    <input type="radio" name="mutations" value="TTN" v-model="myectomy"> TTN
 <p></p>
   <button class="btn btn-warning" @click="onSubmit"> Submit data </button>
  </form>
</div>
</template>
<script>

export default {
    methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>