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

type LiveFireCallInit struct {
	HeadDocument struct {
		
		Influencia      []map[int]int
	    CommonWords     []map[int]int
	    CommonWordsList []map[int][]string
	    Influencers  []map[int]int
	    WordList 	 []map[string][]string


		Content []struct {
			Analized		bool
		    Influencia      []map[int]int
		    CommonWords     []map[int]int
		    CommonWordsList []map[int][]string
		    Influencers  []map[int]int
		    WordList 	 []string
		    SonsParent		 []string
		    SonsAncestor	 []string
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
		} `json:"content"`
		IsComplete bool     `json:"isComplete"`
		Followers  []string `json:"followers"`
		Event      int64    `json:"event"`
		Authors    struct {
			One325091009Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325091009@grupogodo1.fyre.co"`
			Two3424845Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"23424845@grupogodo1.fyre.co"`
			Edaf5A9180Cd476E9077E9B29144Fb6DGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"edaf5a9180cd476e9077e9b29144fb6d@grupogodo1.fyre.co"`
			F3A6Cb9A107E47Bc9Fe2285033B4Ad17Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"f3a6cb9a107e47bc9fe2285033b4ad17@grupogodo1.fyre.co"`
			SevenCeb329A21C14E52Ac7083Cc90885F2DGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"7ceb329a21c14e52ac7083cc90885f2d@grupogodo1.fyre.co"`
			OneBc19Cd4Bfed4Fa99Fd813F9F878436EGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1bc19cd4bfed4fa99fd813f9f878436e@grupogodo1.fyre.co"`
			One325449065Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325449065@grupogodo1.fyre.co"`
			EightEb5052A6E9F4F78B542Eb19E6Cc2785Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"8eb5052a6e9f4f78b542eb19e6cc2785@grupogodo1.fyre.co"`
			GUID7CZ1JVDHwRxV288TLXd7Gyq77JYRNFSwBdQef7LUGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_7CZ1jVDHwRx_-v288TLXd_7gyq77jYRNFSwBdQef7LU=@grupogodo1.fyre.co"`
			Five63Fe95664B94712920Bd68Eb7134D42Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"563fe95664b94712920bd68eb7134d42@grupogodo1.fyre.co"`
			C99Bd02Fb9B04E6E953842Ebb0860442Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"c99bd02fb9b04e6e953842ebb0860442@grupogodo1.fyre.co"`
			FourE9319F60E5840D0A48A694F3C97Bed0Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"4e9319f60e5840d0a48a694f3c97bed0@grupogodo1.fyre.co"`
			Two70Fa1Aeee984Fc6Ab945C9E79C95142Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"270fa1aeee984fc6ab945c9e79c95142@grupogodo1.fyre.co"`
			Bf518582Debc430Db0Ed5Ad3B60B8EaaGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"bf518582debc430db0ed5ad3b60b8eaa@grupogodo1.fyre.co"`
			E1913Fb4B0B8449489Cc758Fb0Da27E4Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"e1913fb4b0b8449489cc758fb0da27e4@grupogodo1.fyre.co"`
			ThreeC9D4Ae818244Ec29C57432Ed2614B40Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"3c9d4ae818244ec29c57432ed2614b40@grupogodo1.fyre.co"`
			A75016B74468436086F3331Eafb213C3Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"a75016b74468436086f3331eafb213c3@grupogodo1.fyre.co"`
			Zero031630C108E4620845Fdbf365A2D4EfGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"0031630c108e4620845fdbf365a2d4ef@grupogodo1.fyre.co"`
			Four70783Dfb6D54072A06A66F6D910F479Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"470783dfb6d54072a06a66f6d910f479@grupogodo1.fyre.co"`
			GUIDWeGKKZV50FeBRNehi8YRIBQoyIaq1ZLxNeXcQymOhQGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_WeG-KKZV50feBRNehi8yRIBQoyIaq1ZLxNeXcQymOhQ=@grupogodo1.fyre.co"`
			Nine6Cdc28A25044Aaeae2283A5A33B5467Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"96cdc28a25044aaeae2283a5a33b5467@grupogodo1.fyre.co"`
			TwoD13A56Cc642424Fa8374Fbdba674F03Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"2d13a56cc642424fa8374fbdba674f03@grupogodo1.fyre.co"`
			E183Ff71E7154608Bcaf5748A600FbacGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"e183ff71e7154608bcaf5748a600fbac@grupogodo1.fyre.co"`
			One77074111Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"177074111@grupogodo1.fyre.co"`
			E636619F352C40A0A7B819D55Fca6264Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"e636619f352c40a0a7b819d55fca6264@grupogodo1.fyre.co"`
			One325282423Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325282423@grupogodo1.fyre.co"`
			One325578787Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325578787@grupogodo1.fyre.co"`
			Two6F0Feedfd7A4A39B549C561385Ce808Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"26f0feedfd7a4a39b549c561385ce808@grupogodo1.fyre.co"`
			F464E47C2Ee74Bff9Fffb94E05360A7AGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"f464e47c2ee74bff9fffb94e05360a7a@grupogodo1.fyre.co"`
			Five2E56F78E08A499F9C38C560A3194854Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"52e56f78e08a499f9c38c560a3194854@grupogodo1.fyre.co"`
			Eight9717D936B9347B48E7B913Bcc0D6FfeGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"89717d936b9347b48e7b913bcc0d6ffe@grupogodo1.fyre.co"`
			One325264586Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325264586@grupogodo1.fyre.co"`
			Aabcf4F7004C45E985007601B1C4F511Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"aabcf4f7004c45e985007601b1c4f511@grupogodo1.fyre.co"`
			Seven8Fce5Df1Ea14809A26A40895B464BbfGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"78fce5df1ea14809a26a40895b464bbf@grupogodo1.fyre.co"`
			SevenE70E69B0B5D4Cec82085Be5F2A6CbbdGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"7e70e69b0b5d4cec82085be5f2a6cbbd@grupogodo1.fyre.co"`
			E27480906E744122884D4E9Bf000D5BcGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"e27480906e744122884d4e9bf000d5bc@grupogodo1.fyre.co"`
			Seven28912518Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"728912518@grupogodo1.fyre.co"`
			One325231879Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325231879@grupogodo1.fyre.co"`
			One325224984Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325224984@grupogodo1.fyre.co"`
			Adf5E3Af8F3B4B28A3E5C1608B75C8B3Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"adf5e3af8f3b4b28a3e5c1608b75c8b3@grupogodo1.fyre.co"`
			GUID9Sho1Yv9QgPoDrSP6NbLKZpVNXrthMcqtcv7P8NEMJsGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_9sho1yv9qgPoDrSP6NbLKZpVNXrthMcqtcv7p8nEMJs=@grupogodo1.fyre.co"`
			One325576592Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325576592@grupogodo1.fyre.co"`
			C2629383Ad104Ef4Aec767Cb0Dd7E27FGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"c2629383ad104ef4aec767cb0dd7e27f@grupogodo1.fyre.co"`
			Six96C68Ca28A5485F8F38F1D17Ce3EcecGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"696c68ca28a5485f8f38f1d17ce3ecec@grupogodo1.fyre.co"`
			Nine03Fb799F1B64D3Ba64B5B030802D3FfGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"903fb799f1b64d3ba64b5b030802d3ff@grupogodo1.fyre.co"`
			One325616464Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325616464@grupogodo1.fyre.co"`
			Zero5D2Dfca1F0149E497Ac06Dbd443D242Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"05d2dfca1f0149e497ac06dbd443d242@grupogodo1.fyre.co"`
			Ee9F1B7Fc42A4636961Ac3297168CcacGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"ee9f1b7fc42a4636961ac3297168ccac@grupogodo1.fyre.co"`
			D78Fce5479Ba4D1Cb0C3Cd52D41E9853Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"d78fce5479ba4d1cb0c3cd52d41e9853@grupogodo1.fyre.co"`
			Abaa0C9Cd3D1499Aa21Fdc36457Ea5E8Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"abaa0c9cd3d1499aa21fdc36457ea5e8@grupogodo1.fyre.co"`
			ZeroEfb3849Ebd04C2Badc06A134632323EGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"0efb3849ebd04c2badc06a134632323e@grupogodo1.fyre.co"`
			A5E9D87B4962432192F275C410259781Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"a5e9d87b4962432192f275c410259781@grupogodo1.fyre.co"`
			Seven4939Ab98509449Db1A504Abd28776F8Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"74939ab98509449db1a504abd28776f8@grupogodo1.fyre.co"`
			Three15Db9Ea44Ff4963A7D980Bf6787B9DaGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"315db9ea44ff4963a7d980bf6787b9da@grupogodo1.fyre.co"`
			One325222552Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325222552@grupogodo1.fyre.co"`
			Six4Ac95C4651641F6B34Ab71797C88A0CGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"64ac95c4651641f6b34ab71797c88a0c@grupogodo1.fyre.co"`
			Two9C8Cf9Ffcd94F6C87981B9C4231F885Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"29c8cf9ffcd94f6c87981b9c4231f885@grupogodo1.fyre.co"`
			One2B3568E9Ba549Cfa9A2D875B9945118Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"12b3568e9ba549cfa9a2d875b9945118@grupogodo1.fyre.co"`
			One325510618Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325510618@grupogodo1.fyre.co"`
			SixF3D130E4Adf410Bb14E7B666Ce49179Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"6f3d130e4adf410bb14e7b666ce49179@grupogodo1.fyre.co"`
			GUIDUMMk40QywXxs2FF9Lh8HldisKKN1F9E8GzeTcIHyh2QGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_uMMk40QywXxs2FF9lh8hldisKKN1F9e8gzeTcIHyh2Q=@grupogodo1.fyre.co"`
			Nine3546D6892Da4848926E5De3Ae57D0D6Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"93546d6892da4848926e5de3ae57d0d6@grupogodo1.fyre.co"`
			One325305116Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325305116@grupogodo1.fyre.co"`
			Zero4995B40A0E54A108F73E9D557B7C6B5Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"04995b40a0e54a108f73e9d557b7c6b5@grupogodo1.fyre.co"`
			One325598005Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325598005@grupogodo1.fyre.co"`
			One325311046Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325311046@grupogodo1.fyre.co"`
			One325572595Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325572595@grupogodo1.fyre.co"`
			Fad7Eea4447C4E7Fbe3Fc409Fbdd341FGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"fad7eea4447c4e7fbe3fc409fbdd341f@grupogodo1.fyre.co"`
			One325346477Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325346477@grupogodo1.fyre.co"`
			B36C03760Eb244Cdbc3F48D9565B5780Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"b36c03760eb244cdbc3f48d9565b5780@grupogodo1.fyre.co"`
			GUIDNrrpzg4MiaCZN1QYE2T109LBnGxwflJZg4VI59TFlsGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_Nrrpzg4MiaCZN1QYE2t1_09lBnGxwflJZg4vI59tFls=@grupogodo1.fyre.co"`
			B9E5A7Ced2Fc47A8B2987A53648FaebcGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"b9e5a7ced2fc47a8b2987a53648faebc@grupogodo1.fyre.co"`
			GUIDEzD7IIpw73HgJPS2XATCQzDaiFXk2QUOMWUxxrwGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_EzD7iIpw73hgJPS2-X-aTCQzDaiF_Xk2QU_OMWUxxrw=@grupogodo1.fyre.co"`
			Acb7398D77714Ddf8A600C5B462Aa9CfGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"acb7398d77714ddf8a600c5b462aa9cf@grupogodo1.fyre.co"`
			Three66B013152F74Dc39E21Fbb95230C20CGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"366b013152f74dc39e21fbb95230c20c@grupogodo1.fyre.co"`
			Eight49948A0Dd6446E690077154D9Da2C61Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"849948a0dd6446e690077154d9da2c61@grupogodo1.fyre.co"`
			D432936167B9476Eaa6Cfe436Cb5D870Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"d432936167b9476eaa6cfe436cb5d870@grupogodo1.fyre.co"`
			Five82288239Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"582288239@grupogodo1.fyre.co"`
			FourF23163C08114759A6Dea774769D8E2EGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"4f23163c08114759a6dea774769d8e2e@grupogodo1.fyre.co"`
			Two0B8Ce2E83074Ee8A407Ce835F71E583Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"20b8ce2e83074ee8a407ce835f71e583@grupogodo1.fyre.co"`
			Ea8C3A8Feed1457B91Ed63Eb51C8Fe10Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"ea8c3a8feed1457b91ed63eb51c8fe10@grupogodo1.fyre.co"`
			D116976B5Ede48848D9E044B36A9Ef64Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"d116976b5ede48848d9e044b36a9ef64@grupogodo1.fyre.co"`
			Four62C64B77Aed42Cca0B3093Bbf62224FGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"462c64b77aed42cca0b3093bbf62224f@grupogodo1.fyre.co"`
			ZeroFb3A04B4C574D5Fa08B62409636F15DGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"0fb3a04b4c574d5fa08b62409636f15d@grupogodo1.fyre.co"`
			F16Da4Fc6B0349E58261B779Dccce2F4Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"f16da4fc6b0349e58261b779dccce2f4@grupogodo1.fyre.co"`
			One169343647Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1169343647@grupogodo1.fyre.co"`
			Three51113708Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"351113708@grupogodo1.fyre.co"`
			TwoF79547008774186Bea6B725Aa513A43Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"2f79547008774186bea6b725aa513a43@grupogodo1.fyre.co"`
			D66B3617C43A4Cd981Cd3Dbf79F1F1C1Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"d66b3617c43a4cd981cd3dbf79f1f1c1@grupogodo1.fyre.co"`
			Nine0A9Ce6Ad9Fc4359A0F52Da727Aebe42Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"90a9ce6ad9fc4359a0f52da727aebe42@grupogodo1.fyre.co"`
			FourD7554F5F1C9440F9Fe3918F0Bc539EeGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"4d7554f5f1c9440f9fe3918f0bc539ee@grupogodo1.fyre.co"`
			Six43Bfc7A4C8345E481D3Ee74364E6D4AGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"643bfc7a4c8345e481d3ee74364e6d4a@grupogodo1.fyre.co"`
			Nine8B2339D072949B0Adcb1087Adbb5199Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"98b2339d072949b0adcb1087adbb5199@grupogodo1.fyre.co"`
			Two44858896Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"244858896@grupogodo1.fyre.co"`
			One325254013Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325254013@grupogodo1.fyre.co"`
			GUIDQXOIIiAREEyMJZzreoI01JYyaKbaEVwiKFp2MCZTlkGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_qXOIIiAREEyM-JZzreoI01JYyaKbaEVwiKFp2MCZTlk=@grupogodo1.fyre.co"`
			Eb19Fd79B9094A28840Bdbe1725D5AbdGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"eb19fd79b9094a28840bdbe1725d5abd@grupogodo1.fyre.co"`
			One325227759Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325227759@grupogodo1.fyre.co"`
			Seven94390Aef5004E3E8869Adbf28Ecf8B8Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"794390aef5004e3e8869adbf28ecf8b8@grupogodo1.fyre.co"`
			One325221436Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325221436@grupogodo1.fyre.co"`
			Eight890B9D877E64287Bab07E797Ee70F68Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"8890b9d877e64287bab07e797ee70f68@grupogodo1.fyre.co"`
			A32408A3Fcbb4Ef08F014684Ac37E495Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"a32408a3fcbb4ef08f014684ac37e495@grupogodo1.fyre.co"`
			OneE90E2D5666C439Cbb644F980Cd1C87DGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1e90e2d5666c439cbb644f980cd1c87d@grupogodo1.fyre.co"`
			One325241045Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325241045@grupogodo1.fyre.co"`
			E73085B0E7E143Abab117A16654Be4D4Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"e73085b0e7e143abab117a16654be4d4@grupogodo1.fyre.co"`
			SixE93040Cf4934Aaaab9Afec5B1C35322Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"6e93040cf4934aaaab9afec5b1c35322@grupogodo1.fyre.co"`
			One325101331Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325101331@grupogodo1.fyre.co"`
			Nine4Cdfbf79F3C4196B4A4Aa51B15165DdGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"94cdfbf79f3c4196b4a4aa51b15165dd@grupogodo1.fyre.co"`
			GUIDMGIFzmN0Jx3GmH31DIPnvgObadIwEEsTBOoGVlIEGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"_guid_MGIFzmN0Jx3gm-H31d-IPnvgObadIwE_EsTBOoGVlIE=@grupogodo1.fyre.co"`
			One324648544Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1324648544@grupogodo1.fyre.co"`
			Nine39F3A3596804Eec8236529Cc3C956C5Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"939f3a3596804eec8236529cc3c956c5@grupogodo1.fyre.co"`
			Fe520C21Bcd140438Ebf3D5647A237D7Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"fe520c21bcd140438ebf3d5647a237d7@grupogodo1.fyre.co"`
			Db0632Cdbe8D45F5Ab89A15428C43938Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"db0632cdbe8d45f5ab89a15428c43938@grupogodo1.fyre.co"`
			Three0Cc258203C94523Afb4Dc750E2Ea7C0Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"30cc258203c94523afb4dc750e2ea7c0@grupogodo1.fyre.co"`
			One325401476Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325401476@grupogodo1.fyre.co"`
			D9De2D25A56A44Abb01Fb06C3D3Df85FGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"d9de2d25a56a44abb01fb06c3d3df85f@grupogodo1.fyre.co"`
			Three41288997Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"341288997@grupogodo1.fyre.co"`
			Fb54Fb5368Ec4A32875E85604A707D4EGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"fb54fb5368ec4a32875e85604a707d4e@grupogodo1.fyre.co"`
			D92E05Cfb31F4316970031Cd19E1Be18Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"d92e05cfb31f4316970031cd19e1be18@grupogodo1.fyre.co"`
			One325490099Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325490099@grupogodo1.fyre.co"`
			B4F75Fcf50B143Ab973E54A8E262Cd2EGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"b4f75fcf50b143ab973e54a8e262cd2e@grupogodo1.fyre.co"`
			FourE7E06A52F9D4A6B81Ebec6A54D846BfGrupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"4e7e06a52f9d4a6b81ebec6a54d846bf@grupogodo1.fyre.co"`
			One324957373Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1324957373@grupogodo1.fyre.co"`
			Seven12C23823Aa5472Aac33C10857967899Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"712c23823aa5472aac33c10857967899@grupogodo1.fyre.co"`
			SevenC5Df598E2Be4F949Ae74115097Dfbe2Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"7c5df598e2be4f949ae74115097dfbe2@grupogodo1.fyre.co"`
			One325424095Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325424095@grupogodo1.fyre.co"`
			Five114C0D28E824Ea1Bc37372032C9Ebe5Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"5114c0d28e824ea1bc37372032c9ebe5@grupogodo1.fyre.co"`
			One325254471Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"1325254471@grupogodo1.fyre.co"`
			B71F98E140D046Bf90Bdf1A255B278C6Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"b71f98e140d046bf90bdf1a255b278c6@grupogodo1.fyre.co"`
			Two3A8C6Ee54704Db980494Da8553C9471Grupogodo1FyreCo struct {
				DisplayName string        `json:"displayName"`
				Tags        []interface{} `json:"tags"`
				ProfileURL  string        `json:"profileUrl"`
				Avatar      string        `json:"avatar"`
				Handle      string        `json:"handle"`
				Type        int           `json:"type"`
				ID          string        `json:"id"`
			} `json:"23a8c6ee54704db980494da8553c9471@grupogodo1.fyre.co"`
		} `json:"authors"`
	} `json:"headDocument"`
	NetworkSettings struct {
		EditMode              int  `json:"editMode"`
		LiShareEnabled        bool `json:"liShareEnabled"`
		FeaturedReaderEnabled bool `json:"featuredReaderEnabled"`
		Premoderated          bool `json:"premoderated"`
		HovercardsEnabled     bool `json:"hovercardsEnabled"`
		NestLevel             int  `json:"nestLevel"`
		StreamType            int  `json:"streamType"`
		ReviewRepliesEnabled  bool `json:"reviewRepliesEnabled"`
		FbShareEnabled        bool `json:"fbShareEnabled"`
		CommentsEnabled       bool `json:"commentsEnabled"`
		MediaDisplay          int  `json:"mediaDisplay"`
		RichTextEnabled       bool `json:"richTextEnabled"`
		EditCommentInterval   int  `json:"editCommentInterval"`
		AllowGuestComments    bool `json:"allowGuestComments"`
		Apps                  struct {
			Analytics struct {
				Livefyre struct {
					Disabled bool   `json:"disabled"`
					Endpoint string `json:"endpoint"`
				} `json:"livefyre"`
				Google struct {
					Disabled bool `json:"disabled"`
				} `json:"google"`
			} `json:"analytics"`
		} `json:"apps"`
		TaggingEnabled        bool   `json:"taggingEnabled"`
		RepliesEnabled        bool   `json:"repliesEnabled"`
		TopContentDisplay     int    `json:"topContentDisplay"`
		StreamFFThreshold     int    `json:"streamFFThreshold"`
		FeaturingEnabled      bool   `json:"featuringEnabled"`
		CharLimit             int    `json:"charLimit"`
		XxHTMLBlob            string `json:"xxHtmlBlob"`
		ThrottleStream        bool   `json:"throttleStream"`
		HighVelocityMode      bool   `json:"highVelocityMode"`
		AllowEditComments     bool   `json:"allowEditComments"`
		Enabled               bool   `json:"enabled"`
		HighVelocityShowCount int    `json:"highVelocityShowCount"`
		MediaUploadEnabled    bool   `json:"mediaUploadEnabled"`
		TwitterShareEnabled   bool   `json:"twitterShareEnabled"`
		RawHTML               bool   `json:"rawHtml"`
	} `json:"networkSettings"`
	SiteSettings struct {
		AllowGuestComments bool `json:"allowGuestComments"`
		Apps               struct {
			Analytics struct {
				Livefyre struct {
					Endpoint string `json:"endpoint"`
				} `json:"livefyre"`
			} `json:"analytics"`
		} `json:"apps"`
		NestLevel          int  `json:"nestLevel"`
		Premoderated       bool `json:"premoderated"`
		MediaUploadEnabled bool `json:"mediaUploadEnabled"`
		Enabled            bool `json:"enabled"`
	} `json:"siteSettings"`
	CollectionSettings struct {
		NetworkID          string        `json:"networkId"`
		BootstrapURL       string        `json:"bootstrapUrl"`
		AllowEditComments  bool          `json:"allowEditComments"`
		CollectionID       string        `json:"collectionId"`
		URL                string        `json:"url"`
		AllowGuestComments bool          `json:"allowGuestComments"`
		Topics             []interface{} `json:"topics"`
		Tags               []string      `json:"tags"`
		NumVisible         int           `json:"numVisible"`
		SiteID             string        `json:"siteId"`
		NestLevel          int           `json:"nestLevel"`
		ArchiveInfo        struct {
			NPages   int `json:"nPages"`
			PageInfo struct {
				Num0 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"0"`
				Num1 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"1"`
				Num16 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"16"`
				Num17 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"17"`
				Num18 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"18"`
				Num19 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"19"`
				Num20 struct {
					URL   string `json:"url"`
					Last  int    `json:"last"`
					First int    `json:"first"`
				} `json:"20"`
			} `json:"pageInfo"`
			PathBase string `json:"pathBase"`
		} `json:"archiveInfo"`
		Followers           int    `json:"followers"`
		Title               string `json:"title"`
		Checksum            string `json:"checksum"`
		EditCommentInterval int    `json:"editCommentInterval"`
		Config              struct {
			Apps struct {
				Analytics struct {
					Livefyre struct {
						Endpoint string `json:"endpoint"`
					} `json:"livefyre"`
				} `json:"analytics"`
			} `json:"apps"`
		} `json:"config"`
		Event            int64 `json:"event"`
		CommentsDisabled bool  `json:"commentsDisabled"`
	} `json:"collectionSettings"`
}
