package main

import (
	"fmt"
	"net/http"
	"golang.org/x/net/websocket"
)

var weblist []*websocket.Conn
func whetherin(val *websocket.Conn) bool{
	for _,e := range weblist{
		if e == val {
			return true
		}
	}
	return false
}
var thepic string
func Echo(ws *websocket.Conn) {
	var err error

	for {
		var reply string
		if whetherin(ws) == false{
			fmt.Println("NOT IN")
			weblist = append(weblist, ws)
			for _,e := range weblist{
				fmt.Println(1)
				if err = websocket.Message.Send(e, thepic); err != nil {
					fmt.Println("Can't send")

				}
			}
		}
		if err = websocket.Message.Receive(ws, &reply); err != nil {
			fmt.Println("Can't receive")
			break
		}

		//fmt.Println("Received back from client: " + reply)
		fmt.Println("Received back from client")
		thepic = reply
		for _,e := range weblist{
			fmt.Println(1)
			if err = websocket.Message.Send(e, thepic); err != nil {
				fmt.Println("Can't send")

			}
		}

	}
}

func main(){
	http.Handle("/ws",websocket.Handler(Echo))
	http.ListenAndServe("0.0.0.0:1222",nil)

}