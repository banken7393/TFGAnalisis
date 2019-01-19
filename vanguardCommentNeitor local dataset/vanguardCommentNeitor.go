package main

import (
		"fmt"
		"strings"
		"sort"
		"encoding/json"
		"io/ioutil"
		"os"
		)


func sTringToArrayCodes(key string) (resultado string){
	var values =  [66]string{"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
					"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
					"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2",
					"3","4","5","6","7","8","9","-","_","."}
	/*pasamos el string a un char array*/
	var charcodes = []rune(key)
	length := len(charcodes)
	fmt.Printf("\n paco")
	fmt.Printf(values[64])
	fmt.Printf(values[65])
	fmt.Println(charcodes[1])

	nuevosCaracteres :=  ""
	for   i := 0; i < length; i += 3{
		valor1 := int(charcodes[i])
		valor3 := 0
		push4 := 64
		valor2 := 0
		push3 := 64

		if (i + 2) < length{
			valor3 = int(charcodes[i + 2])
			push4 = valor3 & 63
		} 

		if (i + 1) < length{
			valor2 = int(charcodes[i + 1])
			push3 = (valor2 & 15) << 2 | valor3 >> 6
		}
		

		push1 := valor1 >> 2
		push2 := (valor1 & 3) << 4 | valor2 >> 4

		nuevosCaracteres += values[push1] + values[push2] + values[push3] + values[push4]

	}
	
	/*generamos el nuevo string*/
	resultado = string(nuevosCaracteres)
	fmt.Println(resultado)
	return
}

func trimQuote(s string) string {
	if len(s) > 0 && s[0] == '"' {
		s = s[1:]
	}
	if len(s) > 0 && s[len(s)-1] == '"' {
		s = s[:len(s)-1]
	}
	return s
}

func removeHtmlFromComment(s string) (resultado string){
	subcadena := strings.Split(s,"</p>")
    val := subcadena[0]
    subcadena = strings.Split(val,"<p>") 
    val = subcadena[1]
    for strings.Contains(val, "</a>"){
    	subcadena = strings.SplitN(val,"</a>",2) 
    	val = subcadena[1]
	}
	resultado = val
	return

}

func formatResponse(JSONresultpre LiveFireCallInit) (JSONresult LiveFireCallInit, ArbolSencillote MapedTree){
		//fmt.Println("entramos format")
		JSONresult = JSONresultpre
		//json.Unmarshal([]byte(s), &JSONresult)
		//fmt.Println(JSONresult[0])
		ArbolSencillote = MapedTree{}
		ArbolSencillote.SonsAncestor = make(map[string][]string)
		ArbolSencillote.SonsParent = make(map[string][]string)
		ArbolSencillote.WordList = make(map[string][]string)
		ArbolSencillote.InfluenceParent = make(map[string]map[string]float64)
		ArbolSencillote.InfluenceAncestor = make(map[string]map[string]float64)
		ArbolSencillote.Parent = make(map[string]string)
		ArbolSencillote.Ancestor = make(map[string]string)
		ArbolSencillote.OriginalString = make(map[string]string)
		ArbolSencillote.UserInfluence = make(map[string]float64)
		ArbolSencillote.CommentUsers = make(map[string]string)

 		for index, element := range JSONresult {
 			
 			//fmt.Println("entramos format", index, element)
 			if (len(element.Content.BodyHTML) > 0){
 				JSONresult[index].BodyNoHTML = removeHtmlFromComment(element.Content.BodyHTML)
		    
 			} else{
 				JSONresult[index].BodyNoHTML = ""
 			}
 			ArbolSencillote.OriginalString[element.Content.ID] = JSONresult[index].BodyNoHTML
	    	ArbolSencillote.WordList[element.Content.ID] = strings.Split(JSONresult[index].BodyNoHTML," ") 
	    	ArbolSencillote.Ancestor[element.Content.ID] =  element.Content.ParentID
	    	ArbolSencillote.Parent[element.Content.ID] =  element.Content.AncestorID
	    	ArbolSencillote.CommentUsers[element.Content.ID] =  element.Content.AuthorID
	    	ArbolSencillote.UserInfluence[element.Content.AuthorID] =  0
	    	//fmt.Println("format parent",ArbolSencillote.Parent[element.Content.ID])
		    //fmt.Println(JSONresult.HeadDocument.Content[index].BodyNoHTML)
		    //fmt.Println(JSONresult.HeadDocument.Content[index].BodyNoHTML)
		    // index is the index where we are
		    // element is the element from someSlice for where we are
		    if (len(element.Content.AncestorID) > 0){
		    	
				//fmt.Println(element.Content.AncestorID)
		    	ArbolSencillote.SonsAncestor[element.Content.AncestorID] = append(ArbolSencillote.SonsAncestor[element.Content.AncestorID] , element.Content.ID )
		    	//fmt.Println(ArbolSencillote.SonsAncestor[element.Content.AncestorID])
		    	
		    }
		    if (len(element.Content.ParentID) > 0){
		    	//fmt.Println(element.Content.ParentID)
		    	ArbolSencillote.SonsParent[element.Content.ParentID] = append(ArbolSencillote.SonsParent[element.Content.ParentID] , element.Content.ID )
		    	//fmt.Println(ArbolSencillote.SonsParent[element.Content.ParentID])
		    	
		    }

		}

		return
}


func compareWords(a, b []string) (result []string){
	for i := 0; i<len(a); i+=1 {
		for j := 0; j<len(b); j+=1 {
			if (a[i] == b[j]) {
				result = append(result, a[i])
				break
			}
		}
	}
	return
}

func setInfluenceCommentParent(mapComments MapedTree, id string, parents []string) (resultado MapedTree){

	resultado = mapComments

	for _, i := range mapComments.SonsParent[id] {
		resultado = setInfluenceCommentParent(resultado, i, append(parents, id))
	}
	// Calculamos
	var strResult []string
	var j string
	for k:=len(parents)-1; k>=0 ;k-- {
		j = parents[k];
		if(len(resultado.InfluenceParent[j])==0){
			resultado.InfluenceParent[j] = make(map[string]float64)
		}
		if(k==len(parents)-1) {
			strResult = compareWords(resultado.WordList[j], resultado.WordList[id])
			resultado.InfluenceParent[j][id] = float64(len(strResult)) / float64(len(resultado.WordList[id]))
		} else {
			strResult = compareWords(resultado.WordList[j], strResult)
			resultado.InfluenceParent[j][id] = float64(len(strResult)) / float64(len(resultado.WordList[id])) * resultado.InfluenceParent[parents[k+1]][id]
		}
	} 

/*
	for key, littlemap := range mapComments{
		//ALERTA ACORDARSE ALERTA elegimos parentID hacer luego funcion hermana cambiando valor 
		
		if val, ok := littlemap["parentId"]; ok {	
			//tiene padre .Llamada recursiva y operaciones
			for subkey, word := range littlemap["splittedBody"].([]string){
				fatherCommentText : gjson.Get(mapComments.(string), `#[id="807169379"].id`)
				if strings.Contains(, word){

				}

			}


			strings.Contains(val.(string), "</a>")

		}else{

			//no tiene padre(caso base)
		}

	}
*/
	return
}

func setInfluence(mapComments MapedTree) (resultado MapedTree){
	//fmt.Println("entramos set influence")
	for i := range mapComments.WordList {
	     //fmt.Println("entramos set influence")
		//miramos las hojas
	    if len(mapComments.Parent[i]) <= 0  {
	        // Found!
			resultado = setInfluenceCommentParent(mapComments, i, []string{})
	    }
	}
/*
	for key, littlemap := range mapComments{
		//ALERTA ACORDARSE ALERTA elegimos parentID hacer luego funcion hermana cambiando valor 
		
		if val, ok := littlemap["parentId"]; ok {	
			//tiene padre .Llamada recursiva y operaciones
			for subkey, word := range littlemap["splittedBody"].([]string){
				fatherCommentText : gjson.Get(mapComments.(string), `#[id="807169379"].id`)
				if strings.Contains(, word){

				}

			}


			strings.Contains(val.(string), "</a>")

		}else{

			//no tiene padre(caso base)
		}

	}
*/
	return
}


func calculateInfluence (mp MapedTree) (res MapedTree){
	res = mp
	// Recorro comentarios
	for i := range mp.WordList {
		for j := range mp.InfluenceParent[i] {
			res.UserInfluence[mp.CommentUsers[i]] += mp.InfluenceParent[i][j]
			// fmt.Println(res.UserInfluence[mp.CommentUsers[i]] += mp.InfluenceParent[i][j])
		}
	}
	return
}


func main() {

	// Open our jsonFile
	jsonFile, err := os.Open("auxiliar/comments2.json")
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Successfully Opened comments2.json")
	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)
	var JSONresult, JSONTEMP LiveFireCallInit 
	//, JSONTEMP 
	json.Unmarshal([]byte(byteValue), &JSONresult)
	fmt.Println("json unmarshed")
	analyzed := make(map[string]bool)
/*
	sort.SliceStable(JSONresult, func(i, j int) bool {
	    return JSONresult[i].ID.Collection < JSONresult[j].ID.Collection
	})*/
	fmt.Println("json reordered")
	collection := "0"
	//sumatorio := 0
	for _,comment := range JSONresult{
		if (comment.ID.Collection == collection){
			JSONTEMP= append(JSONTEMP,comment)

		}else if  _, ok := analyzed[comment.ID.Collection]; !ok {
			fmt.Println("new formating", collection)

			_, arbolSimplificado := formatResponse(JSONTEMP)

			fmt.Println("json formated")
			//mapComments = setInfluenceCommentParent(mapComments,paco)
			arbolSimplificado = setInfluence(arbolSimplificado) 

			// Calculamos el usuario más pro
			arbolSimplificado = calculateInfluence(arbolSimplificado)
			type kv struct {
		        Key   string
		        Value float64
		    }

		    var ss []kv
		    for k, v := range arbolSimplificado.UserInfluence {
		        ss = append(ss, kv{k, v})
		    }

		    sort.Slice(ss, func(i, j int) bool {
		        return ss[i].Value > ss[j].Value
		    })

		    for iteration, kv := range ss {
		        fmt.Printf("%s, %g\n", kv.Key, kv.Value)
		        if(iteration == 5){
		        	break
		        };
		    }	


			collection = comment.ID.Collection
			analyzed[collection] = true;
			JSONTEMP = LiveFireCallInit{}
			JSONTEMP= append(JSONTEMP,comment)
			//sumatorio+=1
		}
	//fmt.Println("sumatorio : ", sumatorio)
	}
	


	
}