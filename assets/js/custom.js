/*
 * @Author: ogisetiawan21@gmail.com 
 * @Date: 2022-02-15 21:49:50 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2022-02-15 22:26:58
 */

// ~ InitWriter
const app = document.getElementById("subtitle");
let typewriter = new Typewriter(app, {
    loop: true
  });
  typewriter
    .typeString("Web Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Front-end Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Back-end Developer")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Freelancer")
    .pauseFor(1500)
    .start();

// ~ Age and Experience
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const age = document.getElementById('age');
const exp = document.getElementById('exp');
const born = "1995/10/16";
const startExp = "2014/07/19";
age.innerText = getAge(born) + ' years';
exp.innerText = getAge(startExp) + ' years';