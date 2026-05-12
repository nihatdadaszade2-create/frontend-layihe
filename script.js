// Düyməni tapırıq
const btn = document.querySelector('button');

// Düyməyə klikləyəndə nə baş verəcəyini deyirik
btn.addEventListener('click', function() {
    // Təsadüfi bir rəng yaradırıq
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Səhifənin fon rəngini həmin rəngə boyayırıq
    document.body.style.backgroundColor = randomColor;
    
    // Düymənin daxilindəki yazını dəyişirik
    btn.innerText = "Rəng dəyişdi!";
});