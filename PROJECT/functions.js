// проверка на жи-ши
function gi_shi(a) {
  if (
    a.includes("жы") ||
    a.includes("шы") ||
    a.includes("чя") ||
    a.includes("щя") ||
    a.includes("чю") ||
    a.includes("щю")
  ) {
    return true;
  }
}

// на чк-чн-чт
function chk(a) {
  if (
    a.includes("чьк") ||
    a.includes("чьн") ||
    a.includes("чьт") ||
    a.includes("ньч") ||
    a.includes("ньщ") ||
    a.includes("рьщ") ||
    a.includes("щьн")
  ) {
    return true;
  }
}

// на лаг-лож
function lag(a) {
  if (a.includes("лог") || a.includes("лаж")) {
    return true;
  }
}

// на раст-ращ-рос
function ras(a) {
  if (
    a.includes("расток") ||
    a.includes("растк") ||
    a.includes("растовщ") ||
    a.includes("Растов") ||
    a.includes("отросл") ||
    a.includes("расточ") ||
    a.includes("Растислав")
  ) {
    return true;
  } else if (
    a.includes("рост") ||
    a.includes("рощ") ||
    a.includes("расл") ||
    a.includes("расш")
  ) {
    return true;
  }
}

function prist_zs(a) {
  // на приставки з-с
  if (
    a.substring(0, 4).includes("сдес") ||
    a.includes("сдешн") ||
    a.includes("сдани") ||
    a.includes("сдоров") ||
    a.includes("сдрав")
  ) {
    return true;
  } else if (
    // з
    a.substring(0, 2).includes("зб") ||
    a.substring(0, 2).includes("зг") ||
    a.substring(0, 2).includes("зз") ||
    a.substring(0, 2).includes("зд") ||
    a.substring(0, 2).includes("зж") ||
    //
    a.substring(0, 5).includes("безк") ||
    a.substring(0, 5).includes("безш") ||
    a.substring(0, 5).includes("безщ") ||
    a.substring(0, 5).includes("безх") ||
    a.substring(0, 5).includes("безф") ||
    a.substring(0, 5).includes("безп") ||
    a.substring(0, 5).includes("безч") ||
    a.substring(0, 5).includes("безс") ||
    a.substring(0, 5).includes("безт") ||
    a.substring(0, 5).includes("безц") ||
    //
    a.substring(0, 5).includes("разк") ||
    a.substring(0, 5).includes("разш") ||
    a.substring(0, 5).includes("разщ") ||
    a.substring(0, 5).includes("разх") ||
    a.substring(0, 5).includes("разф") ||
    a.substring(0, 5).includes("разп") ||
    a.substring(0, 5).includes("разч") ||
    a.substring(0, 5).includes("разс") ||
    a.substring(0, 5).includes("разт") ||
    a.substring(0, 5).includes("разц") ||
    //
    a.substring(0, 4).includes("изк") ||
    a.substring(0, 4).includes("изш") ||
    a.substring(0, 4).includes("изщ") ||
    a.substring(0, 4).includes("изх") ||
    a.substring(0, 4).includes("изф") ||
    a.substring(0, 4).includes("изп") ||
    a.substring(0, 4).includes("изч") ||
    a.substring(0, 4).includes("изс") ||
    a.substring(0, 4).includes("изт") ||
    a.substring(0, 4).includes("изц") ||
    //
    a.substring(0, 4).includes("возк") ||
    a.substring(0, 4).includes("возш") ||
    a.substring(0, 4).includes("возщ") ||
    a.substring(0, 4).includes("возх") ||
    a.substring(0, 4).includes("возф") ||
    a.substring(0, 4).includes("возп") ||
    a.substring(0, 4).includes("возч") ||
    a.substring(0, 4).includes("возс") ||
    a.substring(0, 4).includes("возт") ||
    a.substring(0, 4).includes("возц") ||
    //
    a.substring(0, 4).includes("взк") ||
    a.substring(0, 4).includes("взш") ||
    a.substring(0, 4).includes("взщ") ||
    a.substring(0, 4).includes("взх") ||
    a.substring(0, 4).includes("взф") ||
    a.substring(0, 4).includes("взп") ||
    a.substring(0, 4).includes("взч") ||
    a.substring(0, 4).includes("взс") ||
    a.substring(0, 4).includes("взт") ||
    //
    a.substring(0, 4).includes("низп") ||
    a.substring(0, 5).includes("снизх") ||
    //
    a.substring(0, 6).includes("черезп") ||
    a.substring(0, 6).includes("черезс") ||
    a.substring(0, 6).includes("черезч") ||
    // с
    a.substring(0, 5).includes("бесу") ||
    a.substring(0, 5).includes("бесн") ||
    a.substring(0, 5).includes("бесг") ||
    a.substring(0, 5).includes("бесз") ||
    a.substring(0, 5).includes("бесы") ||
    a.substring(0, 5).includes("бесв") ||
    a.substring(0, 5).includes("беса") ||
    a.substring(0, 5).includes("беср") ||
    a.substring(0, 5).includes("бесо") ||
    a.substring(0, 5).includes("бесл") ||
    a.substring(0, 5).includes("бесд") ||
    a.substring(0, 5).includes("бесж") ||
    a.substring(0, 5).includes("бесм") ||
    a.substring(0, 5).includes("бесб") ||
    //
    a.substring(0, 5).includes("расу") ||
    a.substring(0, 5).includes("расн") ||
    a.substring(0, 5).includes("расг") ||
    a.substring(0, 5).includes("расз") ||
    a.substring(0, 5).includes("расы") ||
    a.substring(0, 5).includes("расв") ||
    a.substring(0, 5).includes("раср") ||
    a.substring(0, 4).includes("расл") ||
    a.substring(0, 4).includes("расд") ||
    a.substring(0, 4).includes("расж") ||
    a.substring(0, 4).includes("расм") ||
    a.substring(0, 4).includes("расб") ||
    //
    a.substring(0, 3).includes("ису") ||
    a.substring(0, 3).includes("исб") ||
    a.substring(0, 3).includes("исг") ||
    a.substring(0, 3).includes("исв") ||
    a.substring(0, 3).includes("иср") ||
    a.substring(0, 3).includes("исж") ||
    a.substring(0, 3).includes("исл") ||
    a.substring(0, 3).includes("исм") ||
    a.substring(0, 3).includes("исд") ||
    a.substring(0, 3).includes("исн") ||
    //
    a.substring(0, 4).includes("восу") ||
    a.substring(0, 4).includes("восн") ||
    a.substring(0, 4).includes("восг") ||
    a.substring(0, 4).includes("восз") ||
    a.substring(0, 4).includes("восы") ||
    a.substring(0, 4).includes("восв") ||
    a.substring(0, 4).includes("воср") ||
    a.substring(0, 4).includes("восо") ||
    a.substring(0, 4).includes("восл") ||
    a.substring(0, 4).includes("восд") ||
    a.substring(0, 4).includes("восж") ||
    a.substring(0, 4).includes("восм") ||
    a.substring(0, 4).includes("восб") ||
    //
    a.substring(0, 3).includes("всу") ||
    a.substring(0, 3).includes("всн") ||
    a.substring(0, 3).includes("всг") ||
    a.substring(0, 3).includes("всз") ||
    a.substring(0, 3).includes("всы") ||
    a.substring(0, 3).includes("всв") ||
    a.substring(0, 3).includes("вср") ||
    a.substring(0, 3).includes("всо") ||
    a.substring(0, 3).includes("всл") ||
    a.substring(0, 3).includes("всд") ||
    a.substring(0, 3).includes("всж") ||
    a.substring(0, 3).includes("всм") ||
    a.substring(0, 3).includes("всб") ||
    //
    a.substring(0, 6).includes("чересу") ||
    a.substring(0, 6).includes("чересн") ||
    a.substring(0, 6).includes("чересг") ||
    a.substring(0, 6).includes("чересз") ||
    a.substring(0, 6).includes("чересы") ||
    a.substring(0, 6).includes("чересв") ||
    a.substring(0, 6).includes("череср") ||
    a.substring(0, 6).includes("чересо") ||
    a.substring(0, 6).includes("чересл") ||
    a.substring(0, 6).includes("чересд") ||
    a.substring(0, 6).includes("чересж") ||
    a.substring(0, 6).includes("чересм") ||
    a.substring(0, 6).includes("чересб") ||
    //
    a.substring(0, 5).includes("чресм") ||
    a.substring(0, 5).includes("чресв")
  ) {
    return true;
  }
}

function skak(a) {
  // скак-скоч
  if (
    a.substring(0, 7).includes("враскоч") ||
    a.substring(0, 6).includes("доскоч") ||
    a.substring(0, 6).includes("заскоч") ||
    a.substring(0, 6).includes("доскоч") ||
    a.substring(0, 6).includes("наскоч") ||
    a.substring(0, 6).includes("обскоч") ||
    a.substring(0, 7).includes("подскоч") ||
    a.substring(0, 6).includes("поскоч") ||
    a.substring(0, 7).includes("прискоч") ||
    a.substring(0, 5).includes("ускоч") ||
    a.includes("скочок") ||
    a.substring(0, 5).includes("скочк") ||
    a.includes("скочу") ||
    a.slice(-5).includes("скочи") ||
    a.includes("доскоч")
  ) {
    return true;
  } else if (a.includes("скок") || a.includes("скач")) {
    return true;
  }
}

function zsi(a) {
  // и-ы после ц
  if (
    a.includes("вакцын") ||
    a.includes("медицын") ||
    a.includes("цынг") ||
    a.includes("циган") ||
    a.includes("ципочк") ||
    a.includes("ципл") ||
    a.includes("цикн") ||
    a.includes("циц")
  ) {
    return true;
  } else if (a.slice(-2).includes("цы") || a.slice(-6).includes("цын")) {
    return false;
  } else if (a.slice(-3).includes("ци") || a.slice(-6).includes("цин")) {
    return true;
  } else if (a.includes("цы")) {
    return true;
  }
}

function prist_i(a) {
  // ы-и после приставок
  if (
    a.substring(0, 5).includes("бези") ||
    a.substring(0, 5).includes("беси") ||
    a.substring(0, 5).includes("вози") ||
    a.substring(0, 5).includes("воси") ||
    a.substring(0, 3).includes("взи") ||
    a.substring(0, 3).includes("вси") ||
    a.substring(0, 3).includes("изи") ||
    a.substring(0, 5).includes("иси") ||
    a.substring(0, 5).includes("нади") ||
    a.substring(0, 5).includes("низи") ||
    a.substring(0, 5).includes("ниси") ||
    a.substring(0, 5).includes("обигр") ||
    a.substring(0, 5).includes("обиск") ||
    a.substring(0, 5).includes("обищ") ||
    a.substring(0, 5).includes("обези") ||
    a.substring(0, 5).includes("обеси") ||
    a.substring(0, 5).includes("отигр") ||
    a.substring(0, 5).includes("отим") ||
    a.substring(0, 5).includes("отиск") ||
    a.substring(0, 5).includes("отыщ") ||
    a.substring(0, 6).includes("подигр") ||
    a.substring(0, 5).includes("подим") ||
    a.substring(0, 6).includes("подиск") ||
    a.substring(0, 7).includes("подитож") ||
    a.substring(0, 7).includes("предид") ||
    a.substring(0, 8).includes("предизбр") ||
    a.substring(0, 8).includes("предикон") ||
    a.substring(0, 9).includes("прединфар") ||
    a.substring(0, 9).includes("предистор") ||
    a.substring(0, 9).includes("предискаж") ||
    a.substring(0, 6).includes("разигр") ||
    a.substring(0, 7).includes("разимен") ||
    a.substring(0, 6).includes("разиск") ||
    a.substring(0, 6).includes("разищ") ||
    a.substring(0, 5).includes("сигр") ||
    a.substring(0, 7).includes("симитир") ||
    a.substring(0, 7).includes("симпров") ||
    a.substring(0, 4).includes("сиск") ||
    a.substring(0, 3).includes("сищ") ||
    a.substring(0, 6).includes("черези") ||
    a.substring(0, 5).includes("череси") ||
    a.substring(0, 5).includes("чрези") ||
    a.substring(0, 5).includes("взыма") ||
    a.substring(0, 4).includes("межы") ||
    a.substring(0, 6).includes("сверхы") ||
    a.substring(0, 5).includes("дезы") ||
    a.substring(0, 5).includes("субы") ||
    a.substring(0, 6).includes("контры") ||
    a.substring(0, 6).includes("трансы") ||
    a.substring(0, 5).includes("посты") ||
    a.substring(0, 5).includes("паны") ||
    a.substring(0, 6).includes("суперы")
  ) {
    return true;
  }
}

function chik(a) {
  // чик-щик
  if (
    a.includes("тщик") ||
    a.includes("жщик") ||
    a.includes("дщик") ||
    a.includes("сщик") ||
    a.includes("зщик") ||
    a.includes("лщик") ||
    a.includes("цчик") ||
    a.includes("кчик") ||
    a.includes("нчик") ||
    a.includes("шчик") ||
    a.includes("щчик") ||
    a.includes("хчик") ||
    a.includes("фчик") ||
    a.includes("вчик") ||
    a.includes("пчик") ||
    a.includes("рчик") ||
    a.includes("мчик") ||
    a.includes("цчик") ||
    a.includes("бчик") ||
    a.includes("лчик")
  ) {
    return true;
  }
}

function dict(a) {
  // непроверяемые гласные
  for (let i = 0; i < diction.length; i++) {
    if (a.includes(diction[i])) {
      return true;
    }
  }
}
