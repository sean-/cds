package cdsclient

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/ovh/cds/sdk/exportentities"
)

func (c *client) PipelineImport(projectKey string, content io.Reader, format string, force bool) ([]string, error) {
	var url string
	url = fmt.Sprintf("/project/%s/import/pipeline?format=%s", projectKey, format)

	if force {
		url += "&forceUpdate=true"
	}

	btes, code, errReq := c.Request("POST", url, content)
	if code != 200 {
		if errReq == nil {
			return nil, fmt.Errorf("HTTP Code %d", code)
		}
	}

	var msgs []string
	if err := json.Unmarshal(btes, &msgs); err != nil {
		return []string{string(btes)}, errReq
	}

	return msgs, errReq
}

func (c *client) ApplicationImport(projectKey string, content io.Reader, format string, force bool) ([]string, error) {
	var url string
	url = fmt.Sprintf("/project/%s/import/application", projectKey)
	if force {
		url += "?force=true"
	}

	mods := []RequestModifier{}
	switch format {
	case "json":
		mods = []RequestModifier{
			func(r *http.Request) {
				r.Header.Set("Content-Type", "application/json")
			},
		}
	case "yaml", "yml":
		mods = []RequestModifier{
			func(r *http.Request) {
				r.Header.Set("Content-Type", "application/x-yaml")
			},
		}
	default:
		return nil, exportentities.ErrUnsupportedFormat
	}

	btes, code, err := c.Request("POST", url, content, mods...)
	if err != nil {
		return nil, err
	}

	if code > 400 {
		return nil, fmt.Errorf("HTTP Code %d", code)
	}

	messages := []string{}
	if err := json.Unmarshal(btes, &messages); err != nil {
		return nil, err
	}

	return messages, nil
}
