package main

import (
		"fmt"
		"regexp"
		"github.com/gocolly/colly"
		"strings"
		//"github.com/tidwall/gjson"
		"encoding/json"
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

func formatResponse(s string) (JSONresult LiveFireCallInit, ArbolSencillote MapedTree){
		//fmt.Println("entramos format")
		json.Unmarshal([]byte(s), &JSONresult)
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

 		for index, element := range JSONresult.HeadDocument.Content {
 			
 			//fmt.Println("entramos format", index, element)
 			if (len(element.Content.BodyHTML) > 0){
 				JSONresult.HeadDocument.Content[index].BodyNoHTML = removeHtmlFromComment(element.Content.BodyHTML)
		    
 			} else{
 				JSONresult.HeadDocument.Content[index].BodyNoHTML = ""
 			}
 			ArbolSencillote.OriginalString[element.Content.ID] = JSONresult.HeadDocument.Content[index].BodyNoHTML
	    	ArbolSencillote.WordList[element.Content.ID] = strings.Split(JSONresult.HeadDocument.Content[index].BodyNoHTML," ") 
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



	commentcaller := colly.NewCollector(

		//colly.AllowedDomains("https://data.livefyre.com", "https://www.lavanguardia.com","https://www.lavanguardia.com/politica/20180902/451568460512/gobierno-catalunya-otono-generalitat.html"),
		colly.URLFilters(
			regexp.MustCompile("https://www\\.lavanguardia\\.com/"),
			regexp.MustCompile("https://data\\.livefyre\\.com/"),
		),
		colly.MaxDepth(1),
	)

	commentcaller.OnResponse(func(r *colly.Response) {
		stringResult := string(r.Body)
		//fmt.Printf(string)
		//fmt.Printf(string)

		_, arbolSimplificado := formatResponse(stringResult)


		//mapComments = setInfluenceCommentParent(mapComments,paco)
		arbolSimplificado = setInfluence(arbolSimplificado) 

		// Calculamos el usuario más pro
		arbolSimplificado = calculateInfluence(arbolSimplificado)
		fmt.Println(arbolSimplificado.UserInfluence)




		/*sTringToArrayCodes("f1221e48-ae33-11e8-9f36-a0357b49f897")*/
		//fmt.Printf("%s\n", bytes.Replace(r.Body, []byte("\n"), nil, -1))
	})


	// Instantiate default collector
	c := colly.NewCollector(
		// Visit only domains: hackerspaces.org, wiki.hackerspaces.org
		//colly.AllowedDomains("https://data.livefyre.com", "https://www.lavanguardia.com","https://www.lavanguardia.com/politica/20180902/451568460512/gobierno-catalunya-otono-generalitat.html"),
		colly.URLFilters(
			regexp.MustCompile("https://www\\.lavanguardia\\.com/"),
			regexp.MustCompile("https://data\\.livefyre\\.com/"),
		),
		colly.MaxDepth(1),
	)

	c.OnResponse(func(r *colly.Response) {
		string1 := string(r.Body)
		substring := strings.Split(string1,"<!-- Methode uuid: ")
		string2 := substring[1]
		//fmt.Printf(string2)
		substring = strings.Split(string2," -->")
		//fmt.Printf(substring[0])
		/*hago esto por problema con double quotes*/
		stringfinal := trimQuote(substring[0])
		/*sTringToArrayCodes(stringfinal)
		//sTringToArrayCodes("f1221e48-ae33-11e8-9f36-a0357b49f897")*/

		fmt.Println("https://data.livefyre.com/bs3/v3.1/grupogodo1.fyre.co/351112/"+ sTringToArrayCodes(stringfinal) +"/init")

		commentcaller.Visit("https://data.livefyre.com/bs3/v3.1/grupogodo1.fyre.co/351112/"+ sTringToArrayCodes(stringfinal) +"/init")
		//fmt.Printf("%s\n", bytes.Replace(r.Body, []byte("\n"), nil, -1))
	})
	c.Visit("https://www.lavanguardia.com/politica/20180902/451568460512/gobierno-catalunya-otono-generalitat.html")
	// On every a element which has href attribute call callback
	/*c.OnHTML("a[href]", func(e *colly.HTMLElement) {
		link := e.Attr("href")
		// Print link
		fmt.Printf("Link found: %q -> %s\n", e.Text, link)
		// Visit link found on page
		// Only those links are visited which are in AllowedDomains
		//c.Visit(e.Request.AbsoluteURL(link))
	})*/

	// Before making a request print "Visiting ..."
/*	c.OnRequest(func(r *colly.Request) {
    fmt.Println("Visiting", r.URL)
	})

	c.OnError(func(_ *colly.Response, err error) {
	    fmt.Println("Something went wrong:", err)
	})
*/
	
/*
	c.OnHTML("a[href]", func(e *colly.HTMLElement) {
	    e.Request.Visit(e.Attr("href"))
	})

	c.OnHTML("tr td:nth-of-type(1)", func(e *colly.HTMLElement) {
	    fmt.Println("First column of a table row:", e.Text)
	})

	c.OnXML("//h1", func(e *colly.XMLElement) {
	    fmt.Println(e.Text)
	})

	c.OnScraped(func(r *colly.Response) {
	    fmt.Println("Finished", r.Request.URL)
	})*/

	// Start scraping on https://hackerspaces.org
	
}