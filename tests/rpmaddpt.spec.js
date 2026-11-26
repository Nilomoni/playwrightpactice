import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000);
  //login to the application
  await page.goto('https://rpm-uat.empwr.life/login');
  await page.getByRole('textbox', { name: 'Enter your username or email' }).click();
  await page.getByRole('textbox', { name: 'Enter your username or email' }).fill('nilomoni.bhattacherjee@empwr.life');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('radio', { name: 'wellnessconnection uat(TDEM)' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Manage Patients' }).click();
  await page.getByRole('button', { name: 'Add Patient add' }).click();

  // ==================================
  // Dynamic Test Data Generation
  // ==================================

  const timestamp = Date.now();

  const firstName = `New${timestamp}`;
  const lastName = `Patient${timestamp}`;
  const patientId = `PT${timestamp}`;
  const email = `patient${timestamp}@test.com`;
  const city = `City${timestamp}`;

  // Display Generated Data in Console

  console.log('Patient First Name:', firstName);
  console.log('Patient Last Name:', lastName);
  console.log('Patient ID:', patientId);
  console.log('Patient Email:', email);
  

  
  // Add Patient Information
  
  await page.getByRole('textbox', {
    name: 'First Name*'
  }).fill(firstName);

  await page.getByRole('textbox', {
    name: 'Last Name*'
  }).fill(lastName);

  await page.getByRole('radio', {
    name: 'Male',
    exact: true
  }).check();

  await page.getByRole('textbox', {
    name: 'Date of Birth'
  }).fill('1992-01-28');

  await page.getByRole('textbox', {
    name: 'Patient ID'
  }).fill(patientId);

  await page.getByRole('textbox', {
    name: 'Enter email'
  }).fill(email);

  
// Provider Selection

await page.getByRole('textbox', {
  name: "Provider's Name* Select"
}).fill('nilomoni');

await page.getByText(
  'Nilomoni BhattacherjeeNilomoni Provider NEwNilomoni Wellness Provider'
).click();

// await page.getByText('Aditya Agarwal').first().click();

// // Wait until Provider dropdown disappears
// await page.getByText('Aditya Agarwal Advanced MD').waitFor({
//   state: 'hidden'
// });

  // Click outside Provider dropdown to close provider dropdown list
  await page.getByRole('textbox', {name: 'First Name*'}).click();

// Vitals Selection
await page.getByRole('textbox', {
  name: 'Vitals'
}).click();

await page.getByText('WeightBlood PressureBlood').click();

await page.getByText('Blood Pressure').click();



  // ==================================
  // Contact & Chronic Conditions
  // ==================================

  await page.getByRole('button', {
    name: 'Contact & Chronic Conditions'
  }).click();

  await page.getByRole('textbox', {
    name: 'Address'
  }).fill('Test Address');

/*   //Debug code starts here

  console.log(await page.locator('input').evaluateAll(inputs =>
  inputs.map(input => ({
    name: input.name,
    id: input.id,
    placeholder: input.placeholder,
    type: input.type
  }))
));
//end here */

await page.getByPlaceholder('Enter city').fill('California');

  await page.getByLabel('State').selectOption('Florida');

  await page.getByRole('textbox', {
    name: 'Zip Code'
  }).fill('11223');


  // ==================================
  // Insurance
  // ==================================

  await page.getByRole('button', {
    name: 'Insurance'
  }).click();

  await page.getByRole('textbox', {
    name: 'Insurance Name'
  }).fill('Test Insurance');


  // ==================================
  // Save Patient
  // ==================================

  await page.getByRole('button', {
    name: 'Save'
  }).click();

  console.log('Patient created successfully in RPM!');

  //go to manage patient
  await page.getByRole('link', { name: 'Manage Patients' }).click();
  await page.waitForTimeout(6000);

 const searchbox = page.getByPlaceholder(
  "Search by patient's Name / Email / Patient ID / MRN"
);

// Search by First Name
await searchbox.fill(firstName);

// Wait for suggestion
const suggestedPatient = page.getByText(firstName, {
  exact: false
}).first();

await expect(suggestedPatient).toBeVisible({
  timeout: 10000
});

// Capture suggested patient details
const capturedDetails = await suggestedPatient.textContent();

console.log('Suggested Patient Details:', capturedDetails);

// Mouse Left Click on suggestion
await suggestedPatient.click();

console.log('Patient Selected Successfully!');

})
