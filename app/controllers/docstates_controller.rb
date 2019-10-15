class DocstatesController < ApplicationController
  before_action :set_docstate, only: [:show, :edit, :update, :destroy]

  # GET /docstates
  # GET /docstates.json
  def index
    @docstates = Docstate.all
  end

  # GET /docstates/1
  # GET /docstates/1.json
  def show
  end

  # GET /docstates/new
  def new
    @docstate = Docstate.new
  end

  # GET /docstates/1/edit
  def edit
  end

  # POST /docstates
  # POST /docstates.json
  def create
    @docstate = Docstate.new(docstate_params)

    respond_to do |format|
      if @docstate.save
        format.html { redirect_to @docstate, notice: 'Docstate was successfully created.' }
        format.json { render :show, status: :created, location: @docstate }
      else
        format.html { render :new }
        format.json { render json: @docstate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /docstates/1
  # PATCH/PUT /docstates/1.json
  def update
    respond_to do |format|
      if @docstate.update(docstate_params)
        format.html { redirect_to @docstate, notice: 'Docstate was successfully updated.' }
        format.json { render :show, status: :ok, location: @docstate }
      else
        format.html { render :edit }
        format.json { render json: @docstate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /docstates/1
  # DELETE /docstates/1.json
  def destroy
    @docstate.destroy
    respond_to do |format|
      format.html { redirect_to docstates_url, notice: 'Docstate was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_docstate
      @docstate = Docstate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def docstate_params
      params.require(:docstate).permit(:name, :possible_changes)
    end
end
