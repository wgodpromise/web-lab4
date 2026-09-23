function Count() {
    var tCount = document.getElementById("tanks").value;
    var mCount = document.getElementById("missiles").value;
    var bCount  = document.getElementById("bpla").value;
    
    var total = (tCount * 50) + (mCount * 20) + (bCount * 1);    
    document.getElementById("resPrice").innerText = total;
    
    document.getElementById("answer").classList.remove("hidden");
}
