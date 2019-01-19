package main

type MapedTree struct {
	WordList 	 		map[string][]string
	OriginalString		map[string]string
	SonsParent 			map[string][]string
	SonsAncestor		map[string][]string
	InfluenceParent   	map[string]map[string]float64
	InfluenceAncestor   map[string]map[string]float64
	Ancestor			map[string]string
	Parent 				map[string]string
	UserInfluence		map[string]float64
	CommentUsers		map[string]string
}

type LiveFireCallInit []struct {
	Analized		bool
    Influencia      []map[int]int
    CommonWords     []map[int]int
    CommonWordsList []map[int][]string
    Influencers  []map[int]int
    WordList 	 []string
    SonsParent		 []string
    SonsAncestor	 []string
    ID 	struct {
			ID string `json:"id"`
			Collection string `json:"collection"`
		} `json:"_id"`
	BodyNoHTML	 string `json:"bodyNoHtml"`
	Vis          int    `json:"vis"`
	CollectionID string `json:"collectionId"`
	Content      struct {
		Generator struct {
			ID string `json:"id"`
		} `json:"generator"`
		ParentID    string `json:"parentId"`
		BodyHTML    string `json:"bodyHtml"`
		ID          string `json:"id"`
		AuthorID    string `json:"authorId"`
		AncestorID	string `json:"ancestorId"`
		UpdatedAt   int    `json:"updatedAt"`
		Annotations struct {
			Links struct {
			} `json:"links"`
		} `json:"annotations"`
		CreatedAt int `json:"createdAt"`
	} `json:"content"`
	Source int      `json:"source"`
	Type   int      `json:"type"`
	Event  int64    `json:"event"`
	Erefs  []string `json:"erefs,omitempty"`
}
