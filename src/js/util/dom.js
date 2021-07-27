export const $ = id  => document.getElementById(id);

export const clearDom = $node =>  {
    $node.value = "";
};
