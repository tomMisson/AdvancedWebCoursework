<template>
  <form id="manualdata" class="w-auto p-3 was-validated">
    <h2>Update Data</h2>
    <div class="Cardiomyopathytype">
      <select
        class="Cardiomyopathy-select"
        aria-label="Cardiomyopathy Type"
        required
        v-model="cardioType"
      >
        <option selected disabled value="">Choose Cardiomyopathy Type</option>
        <option value="Dilated cardiomyopathy">Dilated cardiomyopathy</option>
        <option value="Hypertrophic cardiomyopathy">
          Hypertrophic cardiomyopathy
        </option>
        <option value="Restrictive cardiomyopathy">
          Restrictive cardiomyopathy
        </option>
        <option value="Arrhythmogenic right ventricular dysplasia">
          Arrhythmogenic right ventricular dysplasia
        </option>
        <option value="Unclassified cardiomyopathy">
          Unclassified cardiomyopathy
        </option>
      </select>
      <div id="Cardiomyopathyvalidation" class="invalid-feedback">
        Please select a valid Cardiomyopathy Type.
      </div>
      <p></p>
    </div>
    <div class="LEDV">
      <label for="LEDV" class="form-LEDV"
        >Left ventricular end diastolic volume (LEDV):
      </label>
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="LEDV"
        placeholder=""
        required
        v-model="ledv"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="REDV">
      <label for="REDV" class="form-REDV"
        >Right ventricular end diastolic volume (REDV) :
      </label>
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="REDV"
        placeholder=""
        required
        v-model="redv"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="LESV">
      <label for="LESV" class="form-LESV"
        >Left ventricular end systolic volume (LESV) :</label
      >
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="LESV"
        placeholder=""
        required
        v-model="lesv"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="RESV">
      <label for="RESV" class="form-RESV"
        >Right ventricular end systolic volume (RESV) :
      </label>
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="RESV"
        placeholder=""
        required
        v-model="resv"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="LVEF">
      <label for="LVEF" class="form-LVEF"
        >Left ventricular ejection fraction (LVEF) :</label
      >
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="LVEF"
        placeholder=""
        required
        v-model="lvef"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="RVEF">
      <label for="RVEF" class="form-RVEF"
        >Right ventricular ejection fraction (RVEF) :</label
      >
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="RVEF"
        placeholder=""
        required
        v-model="rvef"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="LVMASS">
      <label for="LVMASS" class="form-LVMASS"
        >Left ventricular mass (LVMASS) :
      </label>
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="LVMASS"
        placeholder=""
        required
        v-model="lvMass"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="RVMASS">
      <label for="RVMASS" class="form-RVMASS"
        >Right ventricular mass (RVMASS) :</label
      >
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="RVMASS"
        placeholder=""
        required
        v-model="RvMass"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="LSV">
      <label for="LSV" class="form-LSV">Left systolic volume (LSV) :</label>
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="LSV"
        placeholder=""
        required
        v-model="lsv"
      />
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="RSV">
      <label for="RSV" class="form-RSV">Right systolic volume (RSV) :</label>
      <input
        type="number"
        step="0.0001"
        class="form-control"
        id="RSV"
        placeholder=""
        required
        v-model="rsv"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <p></p>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Scarring"
        value="Fibrosis"
        v-model="fibrosis"
      />
      <label class="form-check-label" for="Fibrosis">Fibrosis</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Scarring"
        value="Scarring"
        v-model="scarring"
      />
      <label class="form-check-label" for="Scarring">Scarring</label>
    </div>
    <p></p>
    <div class="gender">
      <select
        class="form-select"
        aria-label="Gender option"
        required
        v-model="gender"
      >
        <option selected disabled value="">Select Your Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <div id="Gendervalidation" class="invalid-feedback">
        Please select a valid Gender.
      </div>
    </div>
    <p></p>

    <div class="MRI">
      <label for="MRI" class="form-MRI">Age at MRI :</label>
      <input
        type="number"
        step="0.0000000000000001"
        class="form-control"
        id="MRI"
        placeholder=""
        required
        v-model="mriAge"
      />
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <p>Apical HCM :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="HCM"
        id="Yes"
        value="Yes"
        v-model="apicalHCM"
      >
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="HCM"
        id="No"
        value="No"
        v-model="apicalHCM"
      >
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Sudden cardiac death :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="SCD"
        id="Yes"
        value="Yes"
        v-model="suddenCardiacDeath"
      >
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="SCD"
        id="No"
        value="No"
        v-model="suddenCardiacDeath"
      >
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Hypertension :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Hypertension"
        id="Yes"
        value="Yes"
        v-model="hypertension"
      >
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Hypertension"
        id="No"
        value="No"
        v-model="hypertension"
      >
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Diabetes :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Diabetes"
        id="Yes"
        value="Yes"
        v-model="diabetes"
      >
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Diabetes"
        id="No"
        value="No"
        checked
        v-model="diabetes"
      >
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>Myectomy :</p>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Myectomy"
        id="Yes"
        value="Yes"
        v-model="myectomy"
      >
      <label class="form-check-label" for="Yes"> Yes </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="Myectomy"
        id="No"
        value="No"
        v-model="myectomy"
      >
      <label class="form-check-label" for="No"> No </label>
    </div>

    <p>HCM gene mutations :</p>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="MYH7"
        value="MYH7"
        @change="handleChange"
      />
      <label class="form-check-label" for="MYH7">MYH7</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="MYBPC3"
        value="MYBPC3"
        @change="handleChange"
      />
      <label class="form-check-label" for="MYBPC3">MYBPC3</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNT2"
        value="TNNT2"
        @change="handleChange"
      />
      <label class="form-check-label" for="TNNT2">TNNT2</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="ACTC"
        value="ACTC"
        @change="handleChange"
      />
      <label class="form-check-label" for="ACTC">ACTC</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TPM1"
        value="TPM1"
        @change="handleChange"
      />
      <label class="form-check-label" for="TPM1">TPM1</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNCI"
        value="TNNCI"
        @change="handleChange"
      />
      <label class="form-check-label" for="TNNCI">TNNCI</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TNNI3"
        value="TNNI3"
        @change="handleChange"
      />
      <label class="form-check-label" for="TNNI3">TNNI3</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="MYL2"
        value="MYL2"
        @change="handleChange"
      />
      <label class="form-check-label" for="MYL2">MYL2</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        id="TTN"
        value="TTN"
        @change="handleChange"
      />
      <label class="form-check-label" for="TTN">TTN</label>
    </div>
  </form>
  <button class="btn btn-warning" @click="updateData">Submit data</button>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { firestore } from "../main";

export default {
  data() {
    return {
      checkedGenes: [],
    };
  },
  setup() {
    const route = useRoute();

    const cardioType = ref("");
    const ledv = ref("");
    const redv = ref("");
    const lesv = ref("");
    const resv = ref("");
    const lvef = ref("");
    const rvef = ref("");
    const lvMass = ref("");
    const RvMass = ref("");
    const lsv = ref("");
    const rsv = ref("");
    const fibrosis = ref(false);
    const scarring = ref(false);
    const gender = ref("");
    const mriAge = ref("");
    const apicalHCM = ref("");
    const suddenCardiacDeath = ref("");
    const hypertension = ref("");
    const diabetes = ref("");
    const myectomy = ref("");
    const hcmGeneMutations = [];

    function handleChange(e) {
      const { value, checked } = e.target;
      if (checked) {
        hcmGeneMutations.push(value);
      } else {
        const index = hcmGeneMutations.findIndex((id) => id === value);
        if (index > -1) {
          hcmGeneMutations.splice(index, 1);
        }
      }
    }

    function updateData() {
      firestore
        .collection("/patientData")
        .doc(route.params.id)
        .update({
          ageAtMRI: mriAge.value,
          apicalHCM: apicalHCM.value,
          diabetes: diabetes.value,
          gender: gender.value,
          hypertension: hypertension.value,
          ledv: ledv.value,
          lesv: lesv.value,
          lsv: lsv.value,
          lvef: lvef.value,
          lvmass: lvMass.value,
          mutatatedGenes: hcmGeneMutations,
          myectomy: myectomy.value,
          redv: redv.value,
          resv: resv.value,
          rsv: rsv.value,
          rvef: rvef.value,
          scar: scarring.value,
          suddenCardiacDeath: suddenCardiacDeath.value,
        })
    }

    return {
      route,
      cardioType,
      ledv,
      redv,
      lesv,
      resv,
      lvef,
      rvef,
      lvMass,
      RvMass,
      lsv,
      rsv,
      fibrosis,
      scarring,
      gender,
      mriAge,
      apicalHCM,
      suddenCardiacDeath,
      hypertension,
      diabetes,
      myectomy,
      hcmGeneMutations,
      handleChange,
      updateData,
    };
  },
};
</script>

<style></style>

