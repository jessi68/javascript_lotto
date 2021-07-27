export const $ = id  => document.getElementById(id);

export const clearHTML = $node =>  {
    $node.innerText = "";
};

export const clearInput = $input => {
    $input.value = ""
};

export const clearText = $node => {
    $node.innerText = ""
}