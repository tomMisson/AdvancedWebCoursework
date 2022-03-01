<template>
  <h2>Update Data</h2>
  <form id="manualdata" v-if="!isProcessing" class="w-auto p-3">
    <select class="Cardiomyopathy-select" aria-label="Cardiomyopathy Type">
      <option selected>Cardiomyopathy Type</option>
      <option value="1">Dilated cardiomyopathy</option>
      <option value="2">Hypertrophic cardiomyopathy</option>
      <option value="3">Restrictive cardiomyopathy</option>
      <option value="4">Arrhythmogenic right ventricular dysplasia</option>
      <option value="5">Unclassified cardiomyopathy</option>
    </select>
    <p></p>

    <div class="LEDV">
      <label for="LEDV" class="form-LEDV"
        >Left ventricular end diastolic volume (LEDV):
      </label>
      <input type="number" class="form-control" id="LEDV" placeholder="" />
    </div>

    <div class="REDV">
      <label for="REDV" class="form-REDV"
        >Right ventricular end diastolic volume (REDV) :
      </label>
      <input type="number" class="form-control" id="REDV" placeholder="" />
    </div>

    <div class="LESV">
      <label for="LESV" class="form-LESV"
        >Left ventricular end systolic volume (LESV) :</label
      >
      <input type="number" class="form-control" id="LESV" placeholder="" />
    </div>

    <div class="RESV">
      <label for="RESV" class="form-RESV"
        >Right ventricular end systolic volume (RESV) :
      </label>
      <input type="number" class="form-control" id="RESV" placeholder="" />
    </div>

    <div class="LVEF">
      <label for="LVEF" class="form-LVEF"
        >Left ventricular ejection fraction (LVEF) :</label
      >
      <input type="number" class="form-control" id="LVEF" placeholder="" />
    </div>

    <div class="RVEF">
      <label for="RVEF" class="form-RVEF"
        >Right ventricular ejection fraction (RVEF) :</label
      >
      <input type="number" class="form-control" id="RVEF" placeholder="" />
    </div>
    <div class="LVMASS">
      <label for="LVMASS" class="form-LVMASS"
        >Left ventricular mass (LVMASS) :
      </label>
      <input type="number" class="form-control" id="LVMASS" placeholder="" />
    </div>
    <div class="RVMASS">
      <label for="RVMASS" class="form-RVMASS"
        >Right ventricular mass (RVMASS) :</label
      >
      <input type="number" class="form-control" id="RVMASS" placeholder="" />
    </div>
    <div class="LSV">
      <label for="LSV" class="form-LSV">Left systolic volume (LSV) :</label>
      <input type="number" class="form-control" id="LSV" placeholder="" />
    </div>
    <div class="RSV">
      <label for="RSV" class="form-RSV">Right systolic volume (RSV) :</label>
      <input type="number" class="form-control" id="RSV" placeholder="" />
    </div>
    <p></p>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Scarring"
        value="option1"
      />
      <label class="form-check-label" for="Fibrosis">Fibrosis</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Scarring"
        value="option2"
      />
      <label class="form-check-label" for="Scarring">Scarring</label>
    </div>
    <p></p>

    <select class="form-select" aria-label="Gender option">
      <option selected>Gender:</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Prefer not to say</option>
    </select>
    <p></p>

    <div class="MRI">
      <label for="MRI" class="form-MRI">Age at MRI :</label>
      <input type="number" class="form-control" id="MRI" placeholder="" />
    </div>

    <p>Apical HCM :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="HCM" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="HCM" id="No" checked />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Sudden cardiac death :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="SCD" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="SCD" id="No" checked />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Hypertension :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Hypertension"
        id="Yes"
      />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Hypertension"
        id="No"
        checked
      />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Diabetes :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Diabetes" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Diabetes"
        id="No"
        checked
      />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Myectomy :</p>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="Myectomy" id="Yes" />
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Myectomy"
        id="No"
        checked
      />
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>HCM gene mutations :</p>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="MYH7" value="MYH7" />
      <label class="form-check-label" for="MYH7">MYH7</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="MYBPC3"
        value="MYBPC3"
      />
      <label class="form-check-label" for="MYBPC3">MYBPC3</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNT2"
        value="TNNT2"
      />
      <label class="form-check-label" for="TNNT2">TNNT2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="ACTC" value="ACTC" />
      <label class="form-check-label" for="ACTC">ACTC</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="TPM1" value="TPM1" />
      <label class="form-check-label" for="TPM1">TPM1</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNCI"
        value="TNNCI"
      />
      <label class="form-check-label" for="TNNCI">TNNCI</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNI3"
        value="TNNI3"
      />
      <label class="form-check-label" for="TNNI3">TNNI3</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="MYL2" value="MYL2" />
      <label class="form-check-label" for="MYL2">MYL2</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="TTN" value="TTN" />
      <label class="form-check-label" for="TTN">TTN</label>
    </div>

    <p></p>
    <button class="btn btn-warning" @click="onSubmit">Submit data</button>

    <p></p>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>
