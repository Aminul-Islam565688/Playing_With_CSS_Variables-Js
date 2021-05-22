const input = document.querySelectorAll('.controls input');

// const handleUpdate = (e) => {
//     console.log(e.target.value);
// }

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    console.log(this.name);
}

input.forEach(input => input.addEventListener('change', handleUpdate))
input.forEach(input => input.addEventListener('mousemove', handleUpdate))