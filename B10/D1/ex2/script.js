function techList(arr, name) {
  if (!arr || arr.length === 0) return 'Vazio!';
  return arr.sort().reduce((obj, val) => {
    obj.push({
      tech: val,
      name
    })

    return obj
  }, [])
}


module.exports = techList;